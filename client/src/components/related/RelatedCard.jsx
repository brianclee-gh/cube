/* eslint-disable react/prop-types */
import React from 'react';

function RelatedCard({ product, styles }) {
  return (
    <li className="related-card-container">
      {/* Card Upper: Image w/ Star icon */}
      { styles
        ? (
          <>
            <div className="related-image-container">
              <img className="related-product-img" src={styles.results[0].photos[0].url} alt="product" />
            </div>
            <div className="related-card-info-container">
              <div className="related-card-info">
                <span className="related-product-category">
                  {' '}
                  { product.category }
                  {' '}
                </span>
                <span className="related-product-name">{ product.name }</span>
                <span className="related-product-price">{ styles.results[0].original_price }</span>
                {/* { styles.results[0].name } */}
                {/* placeholder for STARS */}
              </div>
              {/* Card Lower: Info (Cat, Name, Price, Rating) */}
            </div>
          </>
        )
        : 'Loading...' }
    </li>
  );
}

export default RelatedCard;
