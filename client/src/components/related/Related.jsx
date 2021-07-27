/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ProductsContext } from '../state/ProductsContext.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import './Related.css';

function Related() {
  const { currentProduct, getData } = useContext(ProductsContext);
  const [relatedIds, setRelatedIds] = useState(null);

  const getRelatedProductsIds = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    const fetchedIds = await axios.get(`products/${productId}/related`);
    return fetchedIds.data;
  };

  const handleCardClick = (target, id) => {
    if (target.classList.contains('related-action-btn')) {
      console.log('open modal', id, currentProduct.name);
    } else {
      getData(id);
    }
  };

  useEffect(() => {
    getData('17574');
  }, []);

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
          getRelatedProductsIds={relatedIds}
          handleCardClick={handleCardClick}
          currentProduct={currentProduct}
        />
      ) : ''}
      {/* <YourOutfit /> */}
    </div>
  );
}

export default Related;
