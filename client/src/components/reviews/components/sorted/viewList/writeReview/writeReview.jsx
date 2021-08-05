import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../../../../../state/ProductsContext.jsx';
import { ReviewsContext } from '../../../../../state/ReviewsContext.jsx';
import './writeReview.css';
import Star from './starRatingReview/Rate.jsx';
import Recommend from './recommendationWrite/RecommendationWrite.jsx';
import Characteristics from './characteristics/Characteristics.jsx';
import ReviewSummary from './reviewSummary/ReviewSummary.jsx';
import ReviewBody from './reviewBody/ReviewBody.jsx';
import Nickname from './nickname/Nickname.jsx';
import Email from './writeEmail/WriteEmail.jsx';
import Image from './reviewImage/ReviewImage.jsx';

const postRequestObj = {};

const Modal = ({ handleClose, show, submit }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const { currentProduct } = useContext(ProductsContext);
  const { metaData, postReview } = useContext(ReviewsContext);
  const [recommendProduct, setRecommendProduct] = useState(false);
  const [reviewCharacteristics, setReviewCharacteristics] = useState({});
  const [reviewSummaryWrite, setReviewSummaryWrite] = useState(null);
  const [reviewBodyWrite, setReviewBodyWrite] = useState(null);
  const [nicknameWrite, setNicknameWrite] = useState(null);
  const [emailWrite, setEmailWrite] = useState(null);
  const [imageUploadPopUp, setImageUploadPopUp] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [starRate, setStarRate] = useState(null);
  const [postRequestBody, setPostRequestBody] = useState(null);
  const [errorImg, setErrorImg] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const errorImage = (e) => {
    (e === false) ? setErrorImg(false) : setErrorImg(true);
  };

  const writeStarRrating = (star) => {
    setStarRate(star);
  };

  const imageUploading = (image) => {
    setImageUpload([]);
    setImageUpload(image);
  };

  const imageModalPop = () => {
    setImageUploadPopUp(!imageUploadPopUp);
  };

  const writeEmail = (email) => {
    setEmailWrite(email);
  };

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

  const handleSubmit = async () => {
    await postReview(postRequestBody);

  };

  useEffect(() => {
    if (errorImg === true) {
      setErrorMessage('Please submit valid image')
    } else {
      setErrorMessage(null);
    }
  }, [errorImg]);

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
          <form onSubmit={handleSubmit}>
            <Star change={writeStarRrating}/>
            <Recommend recommend={recommendation} />
            <Characteristics char={metaData.characteristics} change={characteristicsSet} />
            <ReviewSummary change={writeReviewSummary} />
            <ReviewBody change={writeReviewBody} />
            <Nickname change={writeNickname} />
            <Email change={writeEmail} />
            <Image show={imageUploadPopUp} handleClose={imageModalPop} upload={imageUploading} reset={errorImage} />
            <button type="button" className="writeReviewButton" onClick={imageModalPop} >Upload Image</button>
            {(imageUpload !== null) ? <div>{imageUpload.length} images saved</div> : null}
            {imageUpload ? imageUpload.map((photo) => {
              return(
                <div className="reviewImage_thumbnail" key={photo}>
                <img className="reviewImage_upload" src={photo} alt="image" onError={errorImage} />
              </div>
              )
              }) : null}
            <div className="writeReview_submissionError">{errorMessage}</div>
            <input type="submit" value="Submit" disabled={errorImg ? true : false} className="reviewSubmitButton" />
          </form>
          <button type="button" onClick={handleClose}>Close</button>
        </section>
      </div>
    </div>
  );
};

export default Modal;