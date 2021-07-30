/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
// import axios from 'axios';

const Answer = ({ answer }) => {
  return (
    <div>
      <div>A: {answer.body}</div>
      <div>by {answer.answerer_name}, {moment(answer.date).format('LL')} | Helpful? Yes ({answer.helpfulness})  | Report</div>
    </div>
  );
};

export default Answer;
