import React, { useContext, useState } from 'react';
import './viewList.css';
import StarRating from '../../../averageReview/metaRate.jsx';
import { ReviewsContext } from '../../../../../state/ReviewsContext.jsx';

function reviewList() {
  const { reviews } = useContext(ReviewsContext);
  if (reviews !== null) {
    return (
      <div className="reviewBodyBox">
        {reviews.map((review) =>
          <div className="reviewBodyBox_review" key={review.review_id}>
            <span className="reviewBodyBox_rating">{StarRating(review.rating)}</span>
            <h3 className="reviewBodyBox_title"> {review.summary} </h3>
            <div className="reviewBodyBox_usercheck"></div>
            <div className="reviewBodyBox_username">{review.reviewer_name}</div>
            <div className="reviewBodyBox_date">{review.date}</div>
            <p className="reviewBodyBox_body"> {review.body}</p>
            <div className="reviewBodyBox_recommend">recommend? {String(review.recommend)}</div>
            <div className="reviewBodyBox_response">response {String(review.response)}</div>
            {review.photos.map((photo) =>
            <div className="reviewBodyBox_thubnail" key={photo.id} >
              <img className="reviewBodyBox_img" src={photo.url} alt="image" />
            </div>
            )}
            <div className="reviewBodyBox_helpful">helful? {review.helpfulness}</div>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }

}

export default reviewList;