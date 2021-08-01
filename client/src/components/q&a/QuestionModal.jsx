import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionModal = ({ modalOpen, closeModal, openModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //   {`question-modal ${modalOpen ? '' : 'hidden'}`}

  return (
    <>
      <button onClick={openModal}>ADD A QUESTION</button>
      <div className={`question-modal ${modalOpen ? '' : 'qa-hidden'}`}>
        <div className="question-modal-container">
          <h2 className="question-modal-title">Ask your Question</h2>
          <h3 className="question-modal-subtitle">About the (Product Name Here)</h3>
          <form className="question-modal-form" onSubmit={handleSubmit}>
            <label className="modal-name">Nickname*</label>
            <input className="modal-name" placeholder="Example:jack543!" required type="text" maxLength="60" autoComplete="off" onChange={(e) => handleChange('name', e.target.value)} />
            <br />
            <span>For privacy reasons, do not use your full name or email address.</span>
            <br />
            <label className="modal-email">Email*</label>
            <input className="modal-email" placeholder="Example: jack@gmail.com" required type="email" maxLength="60" autoComplete="off" onChange={(e) => handleChange('email', e.target.value)} />
            <br />
            <span>For authentication reasons, you will not be emailed.</span>
            <br />
            <label className="modal-question-label">Question*</label>
            <input className="modal-question" required type="text" maxLength="1000" minLength="" autoComplete="off" onChange={(e) => handleChange('question', e.target.value)} />
            <br />
          <div className="submit-btn-container">
            <button className="modal-submit-btn" type="submit">Add</button>
          </div>
          </form>
          <div className="close-btn-container">
            <button onClick={closeModal} className="close-question-modal-btn" type="button">Close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionModal;
