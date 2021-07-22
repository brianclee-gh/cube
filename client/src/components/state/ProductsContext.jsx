import React, { useContext } from 'react';
import axios from 'axios';
import { GITHUB_KEY, ATELIER_URL } from '../../../config';
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
    const products = await axios.get('/products');
    return products;
  };

  const getProductInfo = async (productId) => {
    const product = await axios.get(`/products/${productId}`);
    return product;
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
    <AtilierContext.ProductsProvider
      value={{
        getProducts,
        getProductInfo,
        getRelatedProducts,
        getProductStyles,
      }}
    >
      { children }
    </AtilierContext.ProductsProvider>
  );
};

export default ProductsProvider;
