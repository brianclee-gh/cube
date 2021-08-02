/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import axios from 'axios';
import ImageModal from './ImageModal.jsx';
import { ProductsContext } from '../state/ProductsContext.jsx';

const AnswerModal = ({ question, modalOpen, closeModal, openModal }) => {
  const { currentProduct } = useContext(ProductsContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [photos, setPhotos] = useState([]);

  const postAnswer = () => {
    const questionId = question.question_id;
    axios.post(`add/answer/${questionId}`, {
      body: answer,
      name: name,
      email: email,
      photos: photos,
    })
      .then((res) => {
        console.log('posted', res.data);
        closeModal;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    if (e.target.placeholder === 'Example:jack543!') {
      setName(e.target.value);
    } else if (e.target.placeholder === 'Example: jack@gmail.com') {
      setEmail(e.target.value);
    } else if (e.target.placeholder === 'Your answer here...') {
      setAnswer(e.target.value);
    } else {
      setPhotos(e.target.value);
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
  };

  //   {`question-modal ${modalOpen ? '' : 'hidden'}`}

  return (
    <div>
      {currentProduct && (
      <>
        <button className="qa-link" onClick={openModal}>ADD ANSWER</button>
        <div className={`answer-modal ${modalOpen ? '' : 'qa-hidden'}`}>
          <div className="answer-modal-container">
            <h2 className="answer-modal-title">Submit your Answer</h2>
            <h3 className="answer-modal-subtitle"> {currentProduct.name}: {question.question_body} </h3>
            <form className="answer-modal-form" onSubmit={handleSubmit}>
              <label className="modal-name">Nickname*</label>
              <input className="modal-name" placeholder="Example:jack543!" required type="text" maxLength="60" autoComplete="off" value={name} onChange={(e) => { handleChange(e); }} />
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
              <label className="modal-photos">Upload Photos</label>
              <input className="modal-photos" placeholder="drop image URL link here" required type="text" maxLength="500" autoComplete="off" value={photos} onChange={(e) => { handleChange(e); }} />
              {/* <ImageModal /> */}
              <div className="btn-container">
                <button onClick={postAnswer} className="modal-submit-btn" type="submit">Add</button>
                <button onClick={closeModal} className="close-question-modal-btn" type="button">Close</button>
              </div>
            </form>
          </div>
        </div>
      </>
      )}
    </div>
  );
};

export default AnswerModal;
