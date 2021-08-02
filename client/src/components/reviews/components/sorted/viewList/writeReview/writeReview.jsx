import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../../../../state/ProductsContext.jsx';
import { ReviewsContext } from '../../../../../state/ReviewsContext.jsx';
import './writeReview.css';
import Star from './starRatingReview/rate.jsx';
import Recommend from './recommendationWrite/recommendationWrite.jsx';
import Characteristics from './characteristics/characteristics.jsx';
import ReviewSummary from './reviewSummary/reviewSummary.jsx';
import ReviewBody from './reviewBody/reviewBody.jsx';

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const { currentProduct } = useContext(ProductsContext);
  const { metaData } = useContext(ReviewsContext);
  const [recommendProduct, setRecommendProduct] = useState(false);
  const [reviewCharacteristics, setReviewCharacteristics] = useState(null);
  const [reviewSummaryWrite, setReviewSummaryWrite] = useState(null);
  const [reviewBodyWrite, setReviewBodyWrite] = useState(null);

  const writeReviewBody = (body) => {
    setReviewBodyWrite(body);
  };

  const writeReviewSummary = (summary) => {
    setReviewSummaryWrite(summary);
  };

  const recommendation = () => {
    setRecommendProduct(!recommendProduct);
  };

  const characteristicsSet = (obj) => {
    setReviewCharacteristics(obj);
  };

  return (
    <div className={showHideClassName}>
      <div className="writeReview">
        <section className="writeReview_modal">
          <div className="writeReview_title">
            Write Your Review
          </div>
          <div className="writeReview_subtitle">
            About the {currentProduct.name}
          </div>
          <Star />
          <Recommend recommend={recommendation} />
          <Characteristics char={metaData.characteristics} change={characteristicsSet} />
          <ReviewSummary change={writeReviewSummary} />
          <ReviewBody change={writeReviewBody} />
          <button type="button" onClick={handleClose}>Close</button>
        </section>
      </div>
    </div>
  );
};

export default Modal;