/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import RelatedCard from './RelatedCard.jsx';

function RelatedProducts({
  relatedProducts,
  relatedStyles,
  relatedMeta,
  handleCardClick,
}) {
  return (
    <div className="related-products-container">
      <div className="related-products-header">
        <h3>YOU MAY LIKE...</h3>
      </div>
      <ul>
        { relatedProducts.length > 0 ? relatedProducts.map((product) => (
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
          />
        )) : 'Loading...' }
      </ul>
    </div>
  );
}

export default RelatedProducts;
