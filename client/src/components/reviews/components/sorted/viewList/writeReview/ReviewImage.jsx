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
          <div className="reviewImage_modal_inside">
          <div className="reviewImage_title">
            Upload your photos
          </div>
          <div className="reviewImage_subtitle">
            Only URL is available
          </div>

          <div className="reviewImageURL_head1">
          <label htmlFor="reviewImageURL1" className="reviewImageURL1_label">First Image URL</label>
          <input type="text" id="reviewImageURL1" name="url1" onChange={onChangeURLOne} />
          <br />
          </div>

          <div className="reviewImageURL_head2">
          <label htmlFor="reviewImageURL2" className="reviewImageURL2_label">Second Image URL</label>
          <input type="text" id="reviewImageURL2" name="url2" onChange={onChangeURLTwo} />
          <br />
          </div>

          <div className="reviewImageURL_head3">
          <label htmlFor="reviewImageURL3" className="reviewImageURL3_label">Third Image URL</label>
          <input type="text" id="reviewImageURL3" name="url3" onChange={onChangeURLThree} />
          <br />
          </div>

          <div className="reviewImageURL_head4">
          <label htmlFor="reviewImageURL4" className="reviewImageURL4_label">Fourth Image URL</label>
          <input type="text" id="reviewImageURL4" name="url4" onChange={onChangeURLFour} />
          <br />
          </div>

          <div className="reviewImageURL_head5">
          <label htmlFor="reviewImageURL5"
          className="reviewImageURL5_label">Fifth Image URL</label>
          <input type="text" id="reviewImageURL5" name="url5" onChange={onChangeURLFive} />
          <br />
          </div>

          <div className="reviewImageUpload_buttons_header">
          <button type="button" className="reviewImageUpload_buttons" onClick={uploadImageURL}>Upload</button>
          <div className="reviewImageUploadDivider"></div>
          <button type="button" className="reviewImageUpload_buttons"  onClick={handleClose}>Close</button>
          </div>

          </div>

        </section>
      </div>
    </div>
  );
};

export default Modal;