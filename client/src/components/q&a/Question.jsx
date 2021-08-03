/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-var */
/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';
import AnswerModal from './AnswerModal.jsx';
// import { markQuestionHelpful, reportQuestion } from '../state/QAContext.jsx';

const Question = ({ question }) => {
  var answers = Object.entries(question.answers).map((a) => a[1]).sort((a, b) => ((a.helpfulness > b.helpfulness) ? -1 : 1));

  const [defaultAnswers, setDefaultAnswers] = useState(2);
  const [expanded, setExpanded] = useState(false);
  const [helpfulCounter, setHepfulCounter] = useState(question.question_helpfulness);
  const [helped, setHelped] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const loadMore = () => {
    expanded ? setDefaultAnswers(2) : setDefaultAnswers(answers.length);
    setExpanded(!expanded);
  };

//   useEffect(() => {
//     markQuestionHelpful(question.question_id)
//       .then((res) => setHelpfulness(res.data.results.question_helpfulness + 1));
//   });

  const markHelpful = () => {
    axios.put('/question/helpful')
      .then(() => {
        setHepfulCounter(helpfulCounter + 1);
        setHelped(true);
      });
  };

  const renderHelpfulButton = () => {
    if (!helped) {
      return (
        <a className="qa-link" onClick={markHelpful}>Yes</a>
      );
    }
    return 'Thanks!';
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="individual-question-container">
        <p className="individual-q-body">
          <b>Q: </b> {question.question_body}
        </p>
        <div className="individual-q-btn-container">
          <span className="helpful">
            Helpful?
          </span>
          {renderHelpfulButton()} ({helpfulCounter})
          <span className="divider"> | </span>
          <button className="qa-link" onClick={openModal}>ADD ANSWER</button>
        </div>
      </div>
      <div className="answers-list">
        {
          answers.slice(0, defaultAnswers).map((a) => <Answer answer={a} key={a.id} />)
        }
        {answers.length > 2 ? (
          <a onClick={loadMore}>
            {expanded ? (
              <button className="expand-btn">COLLAPSE ANSWERS</button>
            ) : (
              <button className="expand-btn">SEE MORE ANSWERS</button>
            )}
          </a>
        ) : null}
        { modalOpen ? (
          <AnswerModal
            question={question}
            modalOpen={modalOpen}
            closeModal={closeModal}
            openModal={openModal}
          />
        ) : null}
      </div>
    </>
  );
};

export default Question;
