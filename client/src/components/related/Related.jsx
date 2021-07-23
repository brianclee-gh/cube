import React, { useContext, useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import { GlobalContext } from '../state/GlobalContext.jsx';
// import './App.css';

function Related() {
  // const [outfit, setOutfit] = useState([]);
  // const { relatedProducts, setRelatedProducts } = useContext(ProductsContext);
  const { getProducts, currentProduct, getCurrentProduct } = useContext(GlobalContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getRelatedProducts = async (productId) => {
    const relatedProductsIds = await axios.get(`products/${productId}/related`);
    const fetchedProducts = await Promise.all(
      relatedProductsIds.data.map(async (id) => {
        const product = await axios.get(`/products/${id}`);
        return product;
      }),
    );
    setRelatedProducts(fetchedProducts);
  };

  return (
    <div className="related-products-section">
      {/* Related Products Component */}
      {/* Your Outfit Component */}
      {/* <button type="button" onClick={showState}>Click Me</button> */}
      <button type="button" onClick={getProducts}>Get Products</button>
      <button type="button" onClick={() => getCurrentProduct(17069)}>Get Current Product</button>
      { currentProduct
        ? (
          <div className="related-item-card">
            {currentProduct.name}
          </div>
        )
        : 'Loading...' }
      <button type="button" onClick={() => getRelatedProducts(17069)}>Get Related Products</button>
    </div>
  );
}

export default Related;
