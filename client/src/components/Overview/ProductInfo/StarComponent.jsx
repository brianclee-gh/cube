/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useContext, useEffect, useState } from 'react';
import StarRating from '../../reviews/components/averageReview/metaRate.jsx';
import { ReviewsContext } from '../../state/ReviewsContext.jsx';

function StarComponent({ productID }) {
  const { filteredReview, metaData, getReviewMetaData } = useContext(ReviewsContext);
  const [totalReview, setTotalReview] = useState(0);

  const getTotalReviews = () => {
    setTotalReview(filteredReview.length);
  };

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

  useEffect(() => {
    if (filteredReview) {
      getTotalReviews();
    }
  }, [filteredReview]);

  return (
    <>
      {metaData ? (
        <div className="star-Component-top">
          <span className="star-rating-top">{StarRating((getRatings(metaData)))}</span>
          <a href="#overAllReview" className="view-total-reviews">
            Read All
            {' '}
            {totalReview}
            {' '}
            Reviews
          </a>
        </div>
      ) : 'Loading...'}
    </>
  );
}

export default StarComponent;
