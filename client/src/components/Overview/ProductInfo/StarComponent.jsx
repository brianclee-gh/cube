/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import StarRating from '../../reviews/components/averageReview/metaRate.jsx';
import { ReviewsContext } from '../../state/ReviewsContext.jsx';

function StarComponent({ productID }) {
  const { metaData, getReviewMetaData } = useContext(ReviewsContext);

  // gives us both number rating and star rating, rounded to nearest 0.25
  let productReviews;
  const getRatings = (meta) => {
    if (!metaData) { return null; }
    const { ratings } = meta;
    let totalReviews = 0;
    let totalRatings = 0;
    Object.keys(ratings).forEach((key) => {
      totalReviews += parseInt(ratings[key], 10);
      totalRatings += parseInt(ratings[key], 10) * parseInt(key, 10);
    });
    const calculatedRating = (totalRatings / totalReviews).toFixed(2);
    productReviews = totalReviews;
    return (Math.round(calculatedRating * 4) / 4).toFixed(2);
  };

  useEffect(() => {
    getReviewMetaData(productID);
  }, [productID]);

  return (
    <>
      {metaData ? (
        <div className="star-Component-top">
          <span>{StarRating((getRatings(metaData)))}</span>
          <a href='#' className="view-total-reviews">
            Read All
            {' '}
            {productReviews}
            {' '}
            Reviews
          </a>
        </div>
      ) : 'Loading...'}
    </>
  );
}

export default StarComponent;
