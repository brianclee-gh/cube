/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import RelatedCard from './RelatedCard.jsx';

function RelatedProducts({ relatedProducts, relatedStyles, relatedMeta, handleCardClick }) {
  return (
    <div className="related-products-container">
      <h2>YOU MIGHT LIKE...</h2>
      <ul>
        { relatedProducts.length > 0 ? relatedProducts.map((product) => (
          <RelatedCard
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
