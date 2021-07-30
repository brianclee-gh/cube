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
          <div className="reviews" key={review.review_id}>
            <span className="starRating">{StarRating(review.rating)}</span>
            <h3 className="reviewTitle"> {review.summary} </h3>
            <p className="reviewBody"> {review.body}</p>
            {review.photos.map((photo) =>
            <div className="reviewImgThumbnails" key={photo.id} >
              <img className="reviewImgMap" src={photo.url} alt="image" />
            </div>
            )}
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }

}

export default reviewList;