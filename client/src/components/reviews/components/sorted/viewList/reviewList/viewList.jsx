import React, { useContext, useState, useEffect } from 'react';
import './viewList.css';
import StarRating from '../../../averageReview/metaRate.jsx';

function reviewList({data}) {
  if (data !== null) {
    return (
      <div className="reviewBodyBox">
        {data.map((review) =>
          <div className="reviews" key={review.review_id}>
            <span className="starRating">{StarRating(review.rating)}</span>
            <h3 className="reviewTitle"> {review.summary} </h3>
            <p className="reviewBody"> {review.body}</p>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }

}

export default reviewList;