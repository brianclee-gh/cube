/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import RelatedCard from './RelatedCard.jsx';

function RelatedProducts({
  relatedIds,
  handleCardClick,
  currentProduct,
}) {
  return (
    <div className="related-products-container">
      <div className="related-products-header">
        <h3>YOU MAY LIKE...</h3>
      </div>
      <ul>
        { relatedIds.length > 0 ? relatedIds.map((id) => (
          <RelatedCard
            relatedIds={relatedIds}
            key={id}
            handleCardClick={handleCardClick}
            id={id}
            currentProduct={currentProduct}
          />
        )) : 'Loading...' }
      </ul>
    </div>
  );
}

export default RelatedProducts;
