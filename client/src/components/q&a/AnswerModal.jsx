/* eslint-disable no-alert */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import { QAContext } from '../state/QAContext.jsx';
import { ProductsContext } from '../state/ProductsContext.jsx';
// import UploadPhotoModal from './UploadPhotoModal.jsx';

const UploadPhotoModal = lazy(() => import('./UploadPhotoModal.jsx'));

let postRequestObj = {};

const AnswerModal = ({ question, closeModal }) => {
  const { currentProduct } = useContext(ProductsContext);
  const { getQuestions } = useContext(QAContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [photos, setPhotos] = useState([]);
  const [uploadPhoto, setUploadPhoto] = useState(false);
  const [postRequestBody, setPostRequestBody] = useState(null);
  const [answerAdded, setAnswerAdded] = useState(false);
  const [errorImg, setErrorImg] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const postAnswer = () => {
    const questionId = question.question_id;
    // console.log(postRequestBody);
    if (errorMessage === 'Please submit valid images') {
      alert('Not able to submit answer due to invalid entry');
    } else {
      axios.post(`add/answer/${questionId}`, postRequestBody)
        .then((res) => {
          console.log('posted', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    postRequestObj['body'] = answer;
    postRequestObj['name'] = name;
    postRequestObj['email'] = email;
    postRequestObj['photos'] = photos;
    setPostRequestBody(postRequestObj);
    // console.log(postRequestBody);
  }, [answer, name, email, photos]);

  const addPhotos = (imageArr) => {
    setPhotos([]);
    setPhotos(imageArr);
  };

  const handleChange = (e) => {
    if (e.target.placeholder === 'Example:jack543!') {
      setName(e.target.value);
    } else if (e.target.placeholder === 'Example: jack@gmail.com') {
      setEmail(e.target.value);
    } else {
      setAnswer(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAnswer();
    closeModal();
    setName('');
    setEmail('');
    setAnswer('');
    setPhotos([]);
    setAnswerAdded(true);
  };

  const closePhotoModal = () => {
    setUploadPhoto(false);
  };

  const openPhotoModal = () => {
    setUploadPhoto(true);
  };

  const errorImage = (e) => {
    (e === false) ? setErrorImg(false) : setErrorImg(true);
  };

  useEffect(() => {
    if (errorImg === true) {
      setErrorMessage('Please submit valid images');
    } else {
      setErrorMessage(null);
    }
  }, [errorImg]);

  return (
    <div className="answer-modal">
      {currentProduct && (
      <>
        <div className="answer-modal-container">
          <h2 className="modal-title">Submit your Answer</h2>
          <h3 className="modal-subtitle"> {currentProduct.name}: {question.question_body} </h3>
          <form className="answer-modal-form" onSubmit={handleSubmit}>
            <label className="modal-name">Nickname*</label>
            <input className="modal-name" placeholder="Example:jack543!" required type="text" maxLength="60" autoComplete="off" value={name} onChange={handleChange} />
            <br />
            <span>For privacy reasons, do not use your full name or email address.</span>
            <br />
            <label className="modal-email">Email*</label>
            <input className="modal-email" placeholder="Example: jack@gmail.com" required type="email" maxLength="60" autoComplete="off" value={email} onChange={(e) => { handleChange(e); }} />
            <br />
            <span>For authentication reasons, you will not be emailed.</span>
            <br />
            <label className="modal-answer-label">Answer*</label>
            <input className="modal-answer" placeholder="Your answer here..." required type="text" maxLength="1000" minLength="" autoComplete="off" value={answer} onChange={(e) => { handleChange(e); }} />
            <br />
            <div className="photos-feature-container">
              <button className="photo-modal-btn" onClick={openPhotoModal} type="button">Upload Photos</button>
              <Suspense fallback={<div>Loading...</div>}>
                <UploadPhotoModal
                  uploadPhoto={uploadPhoto}
                  addPhotos={addPhotos}
                  closePhotoModal={closePhotoModal}
                  reset={errorImage}
                />
              </Suspense>
              <div className="thumbnails-container">
                {photos ? photos.map((photo) => {
                  return (
                    <div className="photo-thumbnail" key={photo}>
                      <img className="photo-img" src={photo} alt="image" onError={errorImage} />
                    </div>
                  );
                }) : null}
              </div>
              <div className="img-error">{errorMessage}</div>
            </div>
            <div className="btn-container">
              <button className="modal-submit-btn" type="submit">Add</button>
              <button onClick={closeModal} className="close-question-modal-btn" type="button">Close</button>
            </div>
          </form>
        </div>
      </>
      )}
    </div>
  );
};

export default AnswerModal;
