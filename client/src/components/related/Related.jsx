/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ProductsContext } from '../state/ProductsContext.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import './Related.css';

function Related() {
  const { currentProduct, getData, metaData } = useContext(ProductsContext);
  const [cachedData, setCachedData] = useState(() => {
    const storedData = localStorage.getItem('relatedProducts');
    return storedData !== null
      ? JSON.parse(storedData)
      : {};
  });
  const [relatedIds, setRelatedIds] = useState(null);

  const getRelatedProductsIds = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    const fetchedIds = await axios.get(`products/${productId}/related`);
    return fetchedIds.data;
  };

  useEffect(() => {
    if (Object.keys(cachedData).length > 0) {
      localStorage.setItem('relatedProducts', JSON.stringify(cachedData));
    } else if (Object.keys(cachedData).length === 0) {
      localStorage.setItem('relatedProducts', JSON.stringify({}));
    }
  }, [cachedData]);

  useEffect(() => {
    getRelatedProductsIds()
      .then((ids) => {
        setRelatedIds(ids);
      })
      .catch((err) => console.log(err));
  }, [currentProduct]);

  return (
    <div className="related-products-section">
      { relatedIds ? (
        <RelatedProducts
          relatedIds={relatedIds}
          currentProduct={currentProduct}
          cachedData={cachedData}
          setCachedData={setCachedData}
        />
      ) : ''}
      <YourOutfit metaData={metaData} cachedData={cachedData} setCachedData={setCachedData} />
    </div>
  );
}

export default Related;
