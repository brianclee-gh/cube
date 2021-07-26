import React from 'react';
import Rate from './components/starRatingReview/rate.jsx';
import MetaRate from './components/averageReview/metaRate.jsx';
import 'font-awesome/css/font-awesome.min.css';

function ReviewsAndRatings() {
  return (
    <div>
      <Rate />
      <MetaRate />
    </div>
  );
}

export default ReviewsAndRatings;
