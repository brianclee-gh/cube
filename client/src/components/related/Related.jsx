import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import { ProductsContext } from '../state/ProductsContext.jsx';
import { ReviewsContext } from '../state/ReviewsContext.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import './Related.css';

function Related() {
  // const [outfit, setOutfit] = useState([]);
  // const { relatedProducts, setRelatedProducts } = useContext(ProductsContext);
  const { getProducts, currentProduct, getCurrentProduct } = useContext(ProductsContext);
  const { getReviewMetaData, ratings, getRatings } = useContext(ReviewsContext);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);

  const getRelatedProducts = async () => {
    if (!currentProduct) { return; }
    const productId = currentProduct.id;

    const relatedProductsIds = await axios.get(`products/${productId}/related`);
    const fetchedProducts = await Promise.all(
      relatedProductsIds.data.map(async (id) => {
        const product = await axios.get(`/products/${id}`);
        return product.data;
      }),
    );
    const fetchedStyles = await Promise.all(
      relatedProductsIds.data.map(async (id) => {
        const style = await axios.get(`/products/${id}/styles`);
        return style.data;
      }),
    );
    setRelatedProducts(fetchedProducts);
    setRelatedStyles(fetchedStyles);
    // set Ratings for each...
  };

  const getMetaData = async () => {
    if (!currentProduct) { return; }
    const productId = currentProduct.id;
    getReviewMetaData(productId);
  };

  useEffect(() => {
    getRelatedProducts();
  }, [currentProduct]);

  return (
    <div className="related-products-section">
      <RelatedProducts
        relatedStyles={relatedStyles}
        relatedProducts={relatedProducts}
      />
      <YourOutfit />
      {/* Related Products Component */}
      {/* Your Outfit Component */}
      <button type="button" onClick={getProducts}>Get Products</button>
      <button type="button" onClick={() => getCurrentProduct(17069)}>Get Current Product</button>
      { currentProduct
        ? (
          <div className="related-item-card">
            {currentProduct.name}
          </div>
        )
        : 'Loading...' }
      <button type="button" onClick={() => getRelatedProducts()}>Get Related Products</button>
      <button type="button" onClick={() => getMetaData()}>Get Meta</button>
      <button type="button" onClick={() => getRatings()}>Get Ratings</button>
    </div>
  );
}

export default Related;
