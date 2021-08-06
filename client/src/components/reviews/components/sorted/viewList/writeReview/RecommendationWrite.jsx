import React from 'react';
import './RecommendationWrite.css';

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
        <input type="radio" className="writeReviewRecommend_Yes_input" id="reviewRecommendYes" value="Yes" name="recommendReview" required/>
          <label className="writeReviewRecommend_Yes_label" htmlFor="reviewRecommendYes">Yes</label>
        <input type="radio" className="writeReviewRecommend_No_input" id="reviewRecommendNo" value="No"  name="recommendReview" defaultChecked />
        <label htmlFor="reviewRecommendNo" className="writeReviewRecommend_No_label">No</label>
      </div>
    </div>
  )
};

export default recommend;