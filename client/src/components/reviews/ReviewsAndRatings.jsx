import React from 'react';
import Rate from './components/starRatingReview/rate.jsx';
import MetaRate from './components/averageReview/metaRate.jsx';
import 'font-awesome/css/font-awesome.min.css';
import SortList from './components/sorted/sortOptions.jsx';

function ReviewsAndRatings() {
  return (
    <div>
      <Rate />
      <MetaRate />
      <SortList />
    </div>
  );
}

export default ReviewsAndRatings;
