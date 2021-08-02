import React from 'react';
import './recommendationWrite.css';

const recommend = ({recommend}) => {
  const onChangeValue = () => {
    recommend();
  };

  return (
    <div className="writeReviewRecommendation">
      <div className="writeReviewRecommendation_title">
        Do you recommend this product? *
      </div>
      <div onChange={onChangeValue}>
        <input type="radio" id="reviewRecommendYes" value="Yes" name="recommendReview" />
          <label htmlFor="reviewRecommendYes">Yes</label>
        <input type="radio" id="reviewRecommendNo" value="No"  name="recommendReview" defaultChecked />
        <label htmlFor="reviewRecommendNo">No</label>
      </div>
    </div>
  )
};

export default recommend;