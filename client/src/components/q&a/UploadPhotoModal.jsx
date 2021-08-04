/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

let imageArr = [];

const UploadPhotoModal = ({ uploadPhoto, addPhotos, closePhotoModal }) => {
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [imageThree, setImageThree] = useState(null);
  const [imageFour, setImageFour] = useState(null);
  const [imageFive, setImageFive] = useState(null);
  const [images, setImages] = useState(null);
  //   let [imageUploadCounter, setImageUploadCounter] = useState(0);

  //   useEffect(() => {
  //     imageArr = [];
  //     setImageUploadCounter(0);
  //   }, []);

  //   useEffect(() => {
  //     console.log(imageArr);
  //     setImages(imageArr);
  //     console.log(images);
  //     closePhotoModal();
  //   }, [imageUploadCounter]);

  const uploadImageURL = () => {
    if (imageOne !== null && imageArr.includes(imageOne) !== true && imageOne !== "") {
      imageArr.push(imageOne);
    //   setImageUploadCounter(imageUploadCounter + 1);
    }
    if (imageTwo !== null && imageArr.includes(imageTwo) !== true && imageOne !== "") {
      imageArr.push(imageTwo);
    }
    if (imageThree !== null && imageArr.includes(imageThree) !== true && imageOne !== "") {
      imageArr.push(imageThree);
    }
    if (imageFour !== null && imageArr.includes(imageFour) !== true && imageOne !== "") {
      imageArr.push(imageFour);
    }
    if (imageFive !== null && imageArr.includes(imageFive) !== true && imageOne !== "") {
      imageArr.push(imageFive);
    }
    console.log(imageOne);
    console.log(imageArr);
    setImages(imageArr);
    console.log(images);
    imageArr = [];
    closePhotoModal();
  };

  const changeOne = (e) => {
    setImageOne(e.target.value);
  };

  const changeTwo = (e) => {
    setImageTwo(e.target.value);
  };

  const changeThree = (e) => {
    setImageThree(e.target.value);
  };

  const changeFour = (e) => {
    setImageFour(e.target.value);
  };

  const changeFive = (e) => {
    setImageFive(e.target.value);
  };

  useEffect(() => {
    addPhotos(images);
  }, [images]);

  return (
    <div className={uploadPhoto ? 'photo-modal' : 'qa-hidden'}>
      <div className="photo-modal-container">
        <div className="photo-modal-form">
          <h2 className="modal-title">Upload Photos</h2>
          <p className="modal-photo-sub"> Up to 5 URL links can be added!</p>
          {/* <p className="modal-photo-sub"> Please separate your URL links with a comma.</p> */}
          <br />
          <label className="modal-photo-label">Image URL #1</label>
          <input className="modal-photo" placeholder="URL link here..." type="text" onChange={changeOne} />
          <br />
          <label className="modal-photo-label">Image URL #2</label>
          <input className="modal-photo" placeholder="URL link here..." type="text" onChange={changeTwo} />
          <br />
          <label className="modal-photo-label">Image URL #3</label>
          <input className="modal-photo" placeholder="URL link here..." type="text" onChange={changeThree} />
          <br />
          <label className="modal-photo-label">Image URL #4</label>
          <input className="modal-photo" placeholder="URL link here..." type="text" onChange={changeFour} />
          <br />
          <label className="modal-photo-label">Image URL #5</label>
          <input className="modal-photo" placeholder="URL link here..." type="text" onChange={changeFive} />
        </div>
        <div className="btn-container">
          <button onClick={uploadImageURL} className="modal-submit-btn" type="button">Upload</button>
          <button onClick={closePhotoModal} className="close-question-modal-btn" type="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotoModal;
