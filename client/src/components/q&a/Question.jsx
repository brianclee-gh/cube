/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-var */
/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import { markQuestionHelpful, reportQuestion } from '../state/QAContext.jsx';
import axios from 'axios';

const Question = ({ question }) => {
  var answers = Object.entries(question.answers).map((a) => a[1]).sort((a, b) => ((a.helpfulness > b.helpfulness) ? -1 : 1));

  const [defaultAnswers, setDefaultAnswers] = useState(2);
  const [expanded, setExpanded] = useState(false);
  const [helpfulCounter, setHepfulCounter] = useState(question.question_helpfulness);
  const [helped, setHelped] = useState(false);

  const loadMore = () => {
    expanded ? setDefaultAnswers(2) : setDefaultAnswers(answers.length);
    setExpanded(!expanded);
  };

//   useEffect(() => {
//     markQuestionHelpful(question.question_id)
//       .then((res) => setHelpfulness(res.data.results.question_helpfulness + 1));
//   });

  const markHelpful = () => {
    axios.put(`/qa/questions/${question.question_id}/helpful`)
      .then(() => {
        setHepfulCounter(helpfulCounter + 1);
        setHelped(true);
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

  return (
    <div>
      <span>Q: {question.question_body}    |      Helpful?
        {renderHelpfulButton()} ({helpfulCounter})   |   Add Answer
      </span>
      <div className="answers-list">
        {
          answers.slice(0, defaultAnswers).map((a) => <Answer answer={a} key={a.id} />)
        }
        {answers.length > 2 ? (
          <a className="expand-answers-btn" onClick={loadMore}>
            {expanded ? (
              <span>COLLAPSE ANSWERS</span>
            ) : (
              <span>SEE MORE ANSWERS</span>
            )}
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Question;
