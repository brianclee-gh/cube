import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ProductsContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null); // Maybe Overview
  const [currentProduct, setCurrentProduct] = useState(null); // All 4
  const [currentStyle, setCurrentStyle] = useState(null); // Only Overview and Related

  const getProducts = async () => {
    try {
      const fetchedProducts = await axios.get('/products');
      setProducts(fetchedProducts.data);
    } catch (e) {
      console.error(e);
    }
  };

  const getCurrentProduct = async (id) => {
    try {
      const fetchedProduct = await axios.get(`/products/${id}`);
      setCurrentProduct(fetchedProduct.data);
    } catch (e) {
      console.error(e);
    }
  };

  const getCurrentStyle = async (id) => {
    try {
      const fetchedStyle = await axios.get(`/products/${id}/styles`);
      setCurrentStyle(fetchedStyle.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ProductsContext.Provider value={{
      products,
      getProducts,
      currentProduct,
      getCurrentProduct,
      currentStyle,
      getCurrentStyle,
    }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
