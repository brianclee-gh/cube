/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import RelatedCard from './RelatedCard.jsx';

function RelatedProducts({
  // relatedProducts,
  getRelatedProductsIds,
  // relatedStyles,
  // relatedMeta,
  handleCardClick,
  currentProduct,
}) {
  return (
    <div className="related-products-container">
      <div className="related-products-header">
        <h3>YOU MAY LIKE...</h3>
      </div>
      <ul>
        { getRelatedProductsIds.length > 0 ? getRelatedProductsIds.map((id) => (
          <RelatedCard
            key={id}
            handleCardClick={handleCardClick}
            id={id}
            currentProduct={currentProduct}
          />
        )) : 'Loading...' }
        {/* { relatedProducts.length > 0 ? relatedProducts.map((product) => (
          <RelatedCard
            key={product.id}
            meta={
              relatedMeta.find((meta) => parseInt(meta.product_id, 10) === product.id)
            }
            styles={
            relatedStyles.find((style) => parseInt(style.product_id, 10) === product.id)
          }
            product={product}
            handleCardClick={handleCardClick}
            id={product.id}
            currentProduct={currentProduct}
          />
        )) : 'Loading...' } */}
      </ul>
    </div>
  );
}

export default RelatedProducts;
