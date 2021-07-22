import React, { useContext } from 'react';
import axios from 'axios';
import { GITHUB_KEY, ATELIER_URL } from '../../../config';
// import GH key from config
// connect to related products and ratings/review

// create Context
export const AtilierContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const {
    setRelatedProductsIds, setRelatedProducts, setProductStyles
  } = useContext(RelatedProductsContext);

  const options = {
    headers: { Authorization: GITHUB_KEY },
  };

  const getProducts = async () => {
    const products = await axios.get(`${ATELIER_URL}products`, options);
    return products;
  };

  const getProduct = async (productId) => {
    const product = await axios.get(`${ATELIER_URL}products/${productId}`, options);
    const styles = await axios.get(`${ATELIER_URL}products/${productId}/styles`, options);
    return [product, styles];
  };

  const getRelatedProducts = async (productId) => {
    const relatedProductsIds = await axios.get(`${ATELIER_URL}products/${productId}/related`, options);
    const relatedProducts = await Promise.all(
      relatedProductsIds.map(async (id) => {
        const product = await getProduct(id);
        return product;
      }),
    );
    return relatedProducts;
  };

  return (
    <AtilierContext.ProductsProvider
      value={{
        getProducts,
        getProduct,
        getRelatedProducts,
      }}
    >
      { children }
    </AtilierContext.ProductsProvider>
  );
};

export default ProductsProvider;
