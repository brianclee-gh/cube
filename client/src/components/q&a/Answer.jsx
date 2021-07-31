/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

const Answer = ({ answer }) => {
  const [helpfulCounter, setHepfulCounter] = useState(answer.helpfulness);
  const [helped, setHelped] = useState(false);
  const [reported, setReported] = useState(false);

  const markHelpful = () => {
    axios.put(`/qa/answers/${answer.id}/helpful`)
      .then(() => {
        setHepfulCounter(helpfulCounter + 1);
        setHelped(true);
      });
  };

  const reportAnswer = () => {
    axios.put(`/qa/answers/${answer.id}/report`)
      .then(() => {
        setReported(true);
        alert('This answer has been reported and marked for review');
      });
  };

  const renderHelpfulButton = () => {
    if (!helped) {
      return (
        <a className="qa-helpful-link" onClick={markHelpful}>Yes</a>
      );
    }
    return 'Thanks!';
  };

  const renderReportButton = () => {
    if (!reported) {
      return (
        <a className="qa-report-link" onClick={reportAnswer}>Report</a>
      );
    }
    return 'Reported';
  };

  return (
    <div>
      <div>A: {answer.body}</div>
      <div>by {answer.answerer_name}, {moment(answer.date).format('LL')} | Helpful? {renderHelpfulButton()} ({helpfulCounter})  | {renderReportButton()}</div>
      {/* {!helped && !reported ? (
        <div>by {answer.answerer_name}, {moment(answer.date).format('LL')} | Helpful? <a className="qa-helpful-link" onClick={markHelpful}>Yes</a> ({helpfulCounter})  | <a className="qa-report-link" onClick={reportAnswer}>Report</a></div>
      ) : (
        <div>by {answer.answerer_name}, {moment(answer.date).format('LL')} | Helpful? Thanks ({helpfulCounter})  | Reported</div>
      )} */}
    </div>
  );
};

export default Answer;
