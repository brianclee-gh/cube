import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../../../../../state/ProductsContext.jsx';
import { ReviewsContext } from '../../../../../state/ReviewsContext.jsx';
import './writeReview.css';
import Star from './starRatingReview/rate.jsx';
import Recommend from './recommendationWrite/recommendationWrite.jsx';
import Characteristics from './characteristics/characteristics.jsx';
import ReviewSummary from './reviewSummary/reviewSummary.jsx';
import ReviewBody from './reviewBody/reviewBody.jsx';
import Nickname from './nickname/nickname.jsx';
import Email from './writeEmail/writeEmail.jsx';
import Image from './reviewImage/reviewImage.jsx';

const postRequestObj = {};

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const { currentProduct } = useContext(ProductsContext);
  const { metaData } = useContext(ReviewsContext);
  const [recommendProduct, setRecommendProduct] = useState(false);
  const [reviewCharacteristics, setReviewCharacteristics] = useState(null);
  const [reviewSummaryWrite, setReviewSummaryWrite] = useState(null);
  const [reviewBodyWrite, setReviewBodyWrite] = useState(null);
  const [nicknameWrite, setNicknameWrite] = useState(null);
  const [emailWrite, setEmailWrite] = useState(null);
  const [imageUploadPopUp, setImageUploadPopUp] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [starRate, setStarRate] = useState(null);
  const [postRequestBody, setPostRequestBody] = useState(null);

  const writeStarRrating = (star) => {
    setStarRate(star);
  };

  const imageUploading = (image) => {
    setImageUpload(image);
  }

  const imageModalPop = () => {
    setImageUploadPopUp(!imageUploadPopUp);
  };

  const writeEmail = (email) => {
    setEmailWrite(email);
  }

  const writeNickname = (nickname) => {
    setNicknameWrite(nickname);
  };

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

  useEffect(() => {
    postRequestObj['product_id'] = currentProduct.id;
    postRequestObj['rating'] = starRate;
    postRequestObj['summary'] = reviewSummaryWrite;
    postRequestObj['body'] = reviewBodyWrite;
    postRequestObj['recommend'] = recommendProduct;
    postRequestObj['name'] = nicknameWrite;
    postRequestObj['email'] = emailWrite;
    postRequestObj['photos'] = imageUpload;
    postRequestObj['characteristics'] = reviewCharacteristics;
    setPostRequestBody(postRequestObj);
  }, [starRate, reviewSummaryWrite, reviewBodyWrite, recommendProduct, nicknameWrite, emailWrite, imageUpload, reviewCharacteristics]);

  const postRequestReviewSubmit = () => {
    
  }

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
          <form>
            <Star change={writeStarRrating}/>
            <Recommend recommend={recommendation} />
            <Characteristics char={metaData.characteristics} change={characteristicsSet} />
            <ReviewSummary change={writeReviewSummary} />
            <ReviewBody change={writeReviewBody} />
            <Nickname change={writeNickname} />
            <Email change={writeEmail} />
            <Image show={imageUploadPopUp} handleClose={imageModalPop} upload={imageUploading} />
            <button type="button" className="writeReviewButton" onClick={imageModalPop} >Upload Image</button>
            {(imageUpload !== null) ? <div>{imageUpload.length} images saved</div> : null}
            {imageUpload ? imageUpload.map((photo) => (
              <div className="reviewImage_thumbnail" key={photo}>
                <img className="reviewImage_upload" src={photo} alt="image" />
              </div>
            )) : null}
            <input type="submit" value="Submit" onClick={postRequestReviewSubmit} className="reviewSubmitButton" />
          </form>
          <button type="button" onClick={handleClose}>Close</button>
        </section>
      </div>
    </div>
  );
};

export default Modal;