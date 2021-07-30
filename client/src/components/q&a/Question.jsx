/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-var */
/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
import React from 'react';
import Answer from './Answer.jsx';

const Question = ({ question }) => {
  var answers = Object.entries(question.answers);
  return (
    <div>
      <div>Q: {question.question_body}         Helpful? Yes ({question.question_helpfulness})   |   Add Answer </div>
      <div className="answers">
        {
          answers.map((answer) => <Answer answer={answer[1]} key={answer[0]} />)
        }
      </div>
    </div>
  );
};

export default Question;
