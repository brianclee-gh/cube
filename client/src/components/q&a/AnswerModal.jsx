/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
import { QAContext } from '../state/QAContext.jsx';
import { ProductsContext } from '../state/ProductsContext.jsx';
import UploadPhotoModal from './UploadPhotoModal.jsx';

let postRequestObj = {};

const AnswerModal = ({ question, closeModal }) => {
  const { currentProduct } = useContext(ProductsContext);
  const { postAnswer } = useContext(QAContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [photos, setPhotos] = useState(null);
  const [uploadPhoto, setUploadPhoto] = useState(false);
  const [postRequestBody, setPostRequestBody] = useState(null);

  //   const postAnswer = () => {
  //     const questionId = question.question_id;
  //     axios.post(`add/answer/${questionId}`, {
  //       body: answer,
  //       name: name,
  //       email: email,
  //       photos: photos,
  //     })
  //       .then((res) => {
  //         console.log('posted', res.data);
  //         closeModal;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  const postRequestAnswer = async () => {
    if (!currentProduct) { return null; }
    const questionId = question.question_id;
    const postRequest = await postAnswer(questionId, postRequestBody);
    return postRequest;
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
    console.log(imageArr);
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
  };

  const closePhotoModal = () => {
    setUploadPhoto(false);
  };

  const openPhotoModal = () => {
    setUploadPhoto(true);
  };

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
            <button className="photo-modal-btn" onClick={openPhotoModal}>Upload Photos</button>
            {/* { uploadPhoto ? (
              <UploadPhotoModal
                addPhotos={addPhotos}
                closePhotoModal={closePhotoModal}
              />
            ) : null} */}
            <UploadPhotoModal
              uploadPhoto={uploadPhoto}
              addPhotos={addPhotos}
              closePhotoModal={closePhotoModal}
            />
            {photos ? photos.map((photo) => {
              return (
                <div className="photo-thumbnail" key={photo}>
                  <img className="photo-img" src={photo} alt="image" />
                </div>
              );
            }) : null}
            <div className="btn-container">
              <button onClick={postRequestAnswer} className="modal-submit-btn" type="button">Add</button>
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
