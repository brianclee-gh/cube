import React, { useContext } from 'react';
import { ProductsContext } from '../../../../../state/ProductsContext.jsx';
import { ReviewsContext } from '../../../../../state/ReviewsContext.jsx';
import './writeReview.css';
import Star from './starRatingReview/rate.jsx';

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const { currentProduct } = useContext(ProductsContext);

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
          <button type="button" onClick={handleClose}>Close</button>
        </section>
      </div>
    </div>
  );
};

export default Modal;