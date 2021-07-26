/* eslint-disable react/prop-types */
import React from 'react';

function RelatedCard({
  product, styles, meta, handleCardClick,
}) {
  const getStars = (metaData) => { // gives us both number rating and star rating, rounded to nearest 0.25
    if (!metaData) { return null; }
    const { ratings } = metaData;
    let totalReviews = 0;
    let totalRatings = 0;
    Object.keys(ratings).forEach((key) => {
      totalReviews += parseInt(ratings[key], 10);
      totalRatings += parseInt(ratings[key], 10) * parseInt(key, 10);
    });
    const calculatedRating = (totalRatings / totalReviews).toFixed(2);
    const starRating = (Math.round(calculatedRating * 4) / 4).toFixed(2);
    return starRating;
  };

  return (
    <li className="related-card-container">
      <div tabIndex="0" role="button" onClick={() => handleCardClick(product.id)} onKeyDown={() => {}}>
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
                  <span className="related-product-stars">{getStars(meta)}</span>
                  {/* { styles.results[0].name } */}
                  {/* placeholder for STARS */}
                </div>
                {/* Card Lower: Info (Cat, Name, Price, Rating) */}
              </div>
            </>
          )
          : 'Loading...' }
      </div>
    </li>
  );
}

export default RelatedCard;
