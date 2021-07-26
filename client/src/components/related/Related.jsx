import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import { ProductsContext } from '../state/ProductsContext.jsx';
// eslint-disable-next-line import/extensions
// import { ReviewsContext } from '../state/ReviewsContext.jsx';
// eslint-disable-next-line import/extensions
import RelatedProducts from './RelatedProducts.jsx';
// eslint-disable-next-line import/extensions
import YourOutfit from './YourOutfit.jsx';
import './Related.css';

function Related() {
  // const [outfit, setOutfit] = useState([]);
  // const { relatedProducts, setRelatedProducts } = useContext(ProductsContext);
  const { currentProduct, getCurrentProduct } = useContext(ProductsContext);
  // const { getReviewMetaData, ratings, getRatings } = useContext(ReviewsContext);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);
  const [relatedMeta, setRelatedMeta] = useState([]);
  // const [relatedIds, setRelatedIds] = useState([]);

  const getRelatedProductsIds = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    const fetchedIds = await axios.get(`products/${productId}/related`);
    return fetchedIds.data;
  };

  const getMetaData = async (productId) => {
    const fetchedMetaData = await axios.get(`/reviews/meta/?product_id=${productId}`);
    return fetchedMetaData.data;
  };

  const getRelatedData = async (ids) => {
    if (!ids) { return null; }
    const fetchedProducts = await Promise.all(
      ids.map(async (id) => {
        const product = await axios.get(`/products/${id}`);
        return product.data;
      }),
    );
    const fetchedStyles = await Promise.all(
      ids.map(async (id) => {
        const style = await axios.get(`/products/${id}/styles`);
        return style.data;
      }),
    );
    const fetchedMeta = await Promise.all(
      ids.map(async (id) => {
        const meta = await axios.get(`/reviews/meta/?product_id=${id}`);
        return meta.data;
      }),
    );
    return Promise.all([fetchedProducts, fetchedStyles, fetchedMeta]);
  };

  const handleCardClick = (id) => {
    getCurrentProduct(id);
  };

  useEffect(() => {
    getCurrentProduct('17574');
  }, []);

  useEffect(() => {
    getRelatedProductsIds()
      .then((ids) => {
        getRelatedData(ids)
          .then((fetchedData) => {
            if (fetchedData) {
              setRelatedProducts(fetchedData[0]);
              setRelatedStyles(fetchedData[1]);
              setRelatedMeta(fetchedData[2]);
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [currentProduct]);

  return (
    <div className="related-products-section">
      <RelatedProducts
        relatedStyles={relatedStyles}
        relatedProducts={relatedProducts}
        handleCardClick={handleCardClick}
        relatedMeta={relatedMeta}
      />
      <YourOutfit />
    </div>
  );
}

export default Related;