import React from 'react';
import QAList from './QAList.jsx';
import qData from './questionsSample.js';
// import aData from './answersSample.js';
import './qa-style.scss';

function QAOverview() {
  const questions = qData.results;
  return (
    <div className="qa-container">
      <h2>QUESTIONS & ANSWERS</h2>
      <QAList questions={questions} />
    </div>
  );
}

export default QAOverview;
