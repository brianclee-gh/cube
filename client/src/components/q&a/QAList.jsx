/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
import { ProductsContext } from '../state/ProductsContext.jsx';
// import moment from 'moment';
import QASearch from './QASearch.jsx';
import Question from './Question.jsx';
import { QAContext } from '../state/QAContext.jsx';
// import sampleQData from './questionsSample.js';
// import sampleAData from './answersSample';
// import './qa-style.scss';

const QAList = () => {
  const { currentProduct } = useContext(ProductsContext);
  const { getQuestions, questions, getAnswers, answers } = useContext(QAContext);
//   const [productId, setProductId] = useState(17067);
  const [data, setData] = useState([]);

  const getQAList = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    await getQuestions(productId, 1, 5);
    // console.log(questions);
    return questions;
  };

  useEffect(() => {
    getQAList()
      .then()
      .catch((err) => console.log(err));
  }, [currentProduct]);


  return (
    <div>
      <h2>Questions & Answers</h2>
      <div>
        <QASearch />
        { questions
          ? questions.map((q) => <Question question={q} key={q.question_id} />)
          : 'Loading'
        }
      </div>
    </div>
  );
};

export default QAList;
