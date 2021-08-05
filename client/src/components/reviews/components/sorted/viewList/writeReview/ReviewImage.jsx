import React, { useState, useEffect } from 'react';
import './ReviewImage.css';

let imageArr = [];

const Modal = ({ handleClose, show, upload, reset }) => {
  const showHideClassName = show ? "reviewImageModal display-block" : "reviewImageModal display-none";
  const [reviewImageUpload, setReviewImageUpload] = useState([]);
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [imageThree, setImageThree] = useState(null);
  const [imageFour, setImageFour] = useState(null);
  const [imageFive, setImageFive] = useState(null);

  const uploadImageURL = () => {
    if (imageOne !== null && imageArr.includes(imageOne) !== true && imageOne !== "") {
      imageArr.push(imageOne);
    }
    if (imageTwo !== null && imageArr.includes(imageTwo) !== true && imageTwo !== "") {
      imageArr.push(imageTwo);
    }
    if (imageThree !== null && imageArr.includes(imageThree) !== true && imageThree !== "") {
      imageArr.push(imageThree);
    }
    if (imageFour !== null && imageArr.includes(imageFour) !== true && imageFour !== "") {
      imageArr.push(imageFour);
    }
    if (imageFive !== null && imageArr.includes(imageFive) !== true && imageFive !== "") {
      imageArr.push(imageFive);
    }
    setReviewImageUpload(imageArr);
    imageArr = [];
    handleClose();
  };

  const onChangeURLOne = (e) => {
    setImageOne(e.target.value);
  }

  const onChangeURLTwo = (e) => {
    setImageTwo(e.target.value);
  }

  const onChangeURLThree = (e) => {
    setImageThree(e.target.value);
  }

  const onChangeURLFour = (e) => {
    setImageFour(e.target.value);
  }

  const onChangeURLFive = (e) => {
    setImageFive(e.target.value);
  }

  useEffect(() => {
    upload(reviewImageUpload);
  }, [reviewImageUpload]);

  useEffect(() => {
    reset(false);
  }, [reviewImageUpload]);

  return (
    <div className={showHideClassName}>
      <div className="reviewImage">
        <section className="reviewImage_modal">
          <div className="reviewImage_title">
            Upload your photos
          </div>
          <input type="text" name="reviewImageURL1" onChange={onChangeURLOne} /> First Image URL <br />
          <input type="text" name="reviewImageURL2" onChange={onChangeURLTwo} /> Second Image URL <br />
          <input type="text" name="reviewImageURL3" onChange={onChangeURLThree} /> Third Image URL <br />
          <input type="text" name="reviewImageURL4" onChange={onChangeURLFour} /> Fourth Image URL <br />
          <input type="text" name="reviewImageURL5" onChange={onChangeURLFive} /> Fifth Image URL <br />
          <button type="button" onClick={handleClose}>Close</button>
          <button type="button" onClick={uploadImageURL}>Upload</button>
        </section>
      </div>
    </div>
  );
};

export default Modal;