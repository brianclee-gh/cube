/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import RelatedCard from './RelatedCard.jsx';

function RelatedProducts({ relatedProducts, relatedStyles }) {
  return (
    <div className="related-products-container">
      <h2>YOU MIGHT LIKE...</h2>
      <ul>
        { relatedProducts.length > 0 ? relatedProducts.map((product) => (
          <RelatedCard
            styles={
            relatedStyles.find((style) => parseInt(style.product_id) === product.id)
          }
            product={product}
          />
        )) : 'Loading...' }
      </ul>
    </div>
  );
}

export default RelatedProducts;
