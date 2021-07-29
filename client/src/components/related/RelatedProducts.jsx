/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from './Carousel.jsx';
import RelatedCard from './RelatedCard.jsx';

function RelatedProducts({
  relatedIds,
  handleCardClick,
}) {
  return (
    <div className="related-products-container">
      <div className="related-products-header">
        <h3>YOU MAY LIKE...</h3>
      </div>
      <Carousel show={relatedIds.length}>
        { relatedIds.length > 0 ? relatedIds.map((id) => (
          <RelatedCard
            relatedIds={relatedIds}
            key={id}
            handleCardClick={handleCardClick}
            id={id}
          />
        )) : 'Loading...' }
      </Carousel>
    </div>
  );
}

export default RelatedProducts;
