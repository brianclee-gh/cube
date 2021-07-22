import React, { useState } from 'react';
import axios from 'axios';
import { GITHUB_KEY } from '../../../config';

const ProductsContext = React.createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(['test']);
  const [currentProduct, setCurrentProduct] = useState(['test']);
  const [productStyle, setProductStyle] = useState(['test']);
  const [relatedProducts, setRelatedProducts] = useState(['test']);

  // const options = {
  //   headers: { Authorization: GITHUB_KEY },
  // };

  const getProducts = async () => {
    const products = await axios.get('/products');
    return products;
  };

  const getProductInfo = async (productId) => {
    const product = await axios.get(`/products/${productId}`);
    setCurrentProduct(product);
  };

  const getProductStyles = async (productId) => {
    const styles = await axios.get(`/products/${productId}/styles`);
    return styles;
  };

  const getRelatedProducts = async (productId) => {
    const relatedProductsIds = await axios.get(`products/${productId}/related`);
    const relatedProducts = await Promise.all(
      relatedProductsIds.map(async (id) => {
        const product = await getProductInfo(id);
        return product;
      }),
    );
    return relatedProducts;
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        currentProduct,
        productStyle,
        relatedProducts,
        getProducts,
        getProductInfo,
        getRelatedProducts,
        getProductStyles,
      }}
    >
      { children }
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
