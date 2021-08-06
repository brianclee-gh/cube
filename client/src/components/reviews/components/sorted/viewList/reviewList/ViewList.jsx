import React, { useContext, useState, useEffect } from 'react';
import './ViewList.css';
import StarRating from '../../../averageReview/MetaRate.jsx';
import { ReviewsContext } from '../../../../../state/ReviewsContext.jsx';
import { ProductsContext } from '../../../../../state/ProductsContext.jsx';
import moment from 'moment';
import LongerThan from './LongerThan.jsx';
import ImagePopUp from './ImagePopUp.jsx';
import Helpful from './Helpful.jsx';

function reviewList({ starOne, starTwo, starThree, starFour, starFive, writeReview }) {
  const { filteredReview, reviews } = useContext(ReviewsContext);
  const { currentProduct } = useContext(ProductsContext);
  const [viewableReviews, setViewableReviews] = useState(2);
  const [expandReview, setExpandReview] = useState(null);
  const [imageModalPopUp, setImageModalPopUp] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const imageModalPop = (param) => {
    setImageModalPopUp(true);
    setCurrentImg(param);
  };

  const hideImageModalPop = () => {
    setImageModalPopUp(false);
  };

  const loadMore = () => {
    setViewableReviews(viewableReviews + 2);
    if (viewableReviews >= filteredReview.length) {
      setExpandReview(false);
    }
  };

  const showAll = () => {
    setViewableReviews(filteredReview.length);
    setExpandReview(false);
  };

  useEffect(() => {
    if (filteredReview !== null) {
      if (filteredReview.length <= 2) {
        setExpandReview(false);
      } else {
        setExpandReview(true);
      }
    }
  }, [filteredReview]);

  useEffect(() => {
    setViewableReviews(2);
    setExpandReview(null);
  }, [currentProduct]);

  if (reviews !== null && starOne === 0 && starTwo === 0 && starThree === 0 && starFour === 0 && starFive === 0) {
    return (
      <div className="reviewBodyTile">
      <div className="reviewBodyBox">
        {reviews.slice(0, viewableReviews).map((review) => (
          <div className="reviewBodyBox_review" key={review.review_id}>
            <span className="reviewBodyBox_rating">{StarRating(review.rating)}</span>
            {/* <div className="reviewBodyBox_userCheck" /> */}
            <div className="reviewBodyBox_username">{review.reviewer_name}</div>
            <div className="reviewBodyBox_date">{moment(review.date).format('ll')}</div>
            <h3 className="reviewBodyBox_title">
              {review.summary.substring(0, 60)}
            </h3>
            <div className="reviewBodyBox_body">
              { (review.body.length >= 250) ? <LongerThan half={review.body.substring(0, 250)} test={review.body}/> : review.body }
            </div>
            <div className="reviewBodyBox_recommend">
              {(review.recommend) ? <div className="reviewBodyBox_Irecommend"><i className="fad fa-check-circle" />I recommend this product</div> : null}
            </div>
            {/* <div className="reviewBodyBox_response">
              response from seller:
              {String(review.response)}
            </div> */}
            {review.photos.map((photo) => (
              <div className="reviewBodyBox_thumbnail" key={photo.id}>
                <img className="reviewBodyBox_img" src={photo.url} alt="image" onClick={() => {imageModalPop(photo.url)}} onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/150"}} />
              </div>
            ))}
            <div className="reviewBodyBox_helpful">
              <Helpful helpfulNum={review.helpfulness} reviewId={review.review_id} />
            </div>
          </div>
        ))}
        <ImagePopUp show={imageModalPopUp} handleClose={hideImageModalPop} img={currentImg} />
      </div>
      {expandReview ? <button className="reviewShowMoreButton" onClick={loadMore}>More Reviews</button> : null}
      <button className="writeReviewButtonMain" onClick={writeReview} >Write Review</button>
      {/* {expandReview ? <button className="showAllReviewButton" onClick={showAll}>Show All Reviews</button> : null} */}
      </div>
    );
  } else if (filteredReview !== null && (starOne === 1 || starTwo === 2 || starThree === 3 || starFour === 4 || starFive === 5))
    return (
    <div className="reviewBodyTile">
    <div className="reviewBodyBox">
      {filteredReview.slice(0, viewableReviews).map((review) => (
        <div className="reviewBodyBox_review" key={review.review_id}>
          <span className="reviewBodyBox_rating">{StarRating(review.rating)}</span>
          {/* <div className="reviewBodyBox_userCheck" /> */}
          <div className="reviewBodyBox_username">{review.reviewer_name}</div>
          <div className="reviewBodyBox_date">{moment(review.date).format('ll')}</div>
          <h3 className="reviewBodyBox_title">
            {review.summary.substring(0, 60)}
          </h3>
          <div className="reviewBodyBox_body">
            { (review.body.length >= 250) ? <LongerThan half={review.body.substring(0, 250)} test={review.body}/> : review.body }
          </div>
          <div className="reviewBodyBox_recommend">
            {(review.recommend) ? <div className="reviewBodyBox_Irecommend"><i className="fad fa-check-circle" />I recommend this product</div> : null}
          </div>
          {/* <div className="reviewBodyBox_response">
            response from seller:
            {String(review.response)}
          </div> */}
          {review.photos.map((photo) => (
            <div className="reviewBodyBox_thumbnail" key={photo.id}>
              <img className="reviewBodyBox_img" src={photo.url} alt="image" onClick={() => {imageModalPop(photo.url)}} onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/150"}} />
            </div>
          ))}
          <div className="reviewBodyBox_helpful">
            <Helpful helpfulNum={review.helpfulness} reviewId={review.review_id} />
          </div>
        </div>
      ))}
      <ImagePopUp show={imageModalPopUp} handleClose={hideImageModalPop} img={currentImg} />
    </div>
    {expandReview ? <button className="reviewShowMoreButton" onClick={loadMore}>More Reviews</button> : null}
    <button className="writeReviewButtonMain" onClick={writeReview} >Write Review</button>
    {/* {expandReview ? <button className="showAllReviewButton" onClick={showAll}>Show All Reviews</button> : null} */}
    </div>
  );
  return null;
}

export default reviewList;
