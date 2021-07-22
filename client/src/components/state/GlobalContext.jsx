import React, { createContext, useState } from 'react';
import axios from 'axios';

export const GlobalContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState(['lol']);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentStyle, setCurrentStyle] = useState([]);

  const getProducts = async () => {
    const fetchedProducts = await axios.get('/products');
    setProducts(fetchedProducts.data);
  };

  const getCurrentProduct = async (id) => {
    const fetchedProduct = await axios.get(`/products/${id}`);
    setCurrentProduct(fetchedProduct.data);
  };

  const getCurrentStyle = async (id) => {
    const fetchedStyle = await axios.get(`/products/${id}/styles`);
    setCurrentStyle(fetchedStyle.data);
  };

  return (
    <GlobalContext.Provider value={{
      products,
      getProducts,
      currentProduct,
      getCurrentProduct,
      currentStyle,
      getCurrentStyle,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
