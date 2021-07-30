import React, { useContext } from 'react';
import './metaData.css';
import StarRating from '../../../averageReview/metaRate.jsx';
import EachRate from './eachRate/eachRate.jsx';
import { ReviewsContext } from '../../../../../state/ReviewsContext.jsx';
import SizeComfort from './sizeComfort/sizeComfort.jsx';
import Recommendation from './recommendation/recommendation.jsx';

function metaRating() {
  const { ratings } = useContext(ReviewsContext);
  if (ratings !== null) {
    return (
      <div className="reviewMetaRating">
        <div className="reviewMetaRating_title">RATING & REVIEWS</div>
        <div className="reviewMetaRating_score">{ratings.starRatingOne}</div>
        <span className="reviewMetaRating_star">{StarRating(ratings.calculatedRating)}</span>
        <Recommendation />
        <EachRate />
        <SizeComfort />
      </div>
    );
  } else {
    return null;
  }
}

export default metaRating;