import React, { useContext } from 'react';
import './recommendation.css';
import { ReviewsContext } from '../../../../../state/ReviewsContext.jsx';

function recommendation() {
  const { metaData } = useContext(ReviewsContext);

  function calculateRecommendation() {
    const trueValue = () => {
      if (metaData.recommended.true === undefined) {
        return 0;
      } else {
        return Number(metaData.recommended.true);
      }
    }
    const falseValue = () => {
      if (metaData.recommended.false === undefined) {
        return 0;
      } else {
        return Number(metaData.recommended.false);
      }
    };
    const trueValues = trueValue();
    const falseValues = falseValue();
    const addition = trueValues + falseValues;
    const percentage = (Number(metaData.recommended.true) / addition) * 100;
    return percentage.toFixed(2);
  }
  const percentage = calculateRecommendation();

  if (metaData !== null) {
    return (
      <div className="recommendation">
        <div className="recommendation_body">{percentage}% of reviews recommend this product</div>
      </div>
    );
  } else {
    return null;
  }
}

export default recommendation;