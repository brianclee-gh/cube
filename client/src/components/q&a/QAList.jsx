/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
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
  const { currentProduct, getData } = useContext(ProductsContext);
  const {
    getQuestions, questions, getAnswers, answers,
  } = useContext(QAContext);
  //   const [productId, setProductId] = useState(17067);
  const [data, setData] = useState([]);
  const [defaultQuestions, setDefaultQuestions] = useState(2);
  const [expanded, setExpanded] = useState(false);

  const getQAList = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    const fetchedData = await getQuestions(productId, 1, 5);
    // might not be working.. cannot read property sort of undefined. but i can't find a productId that has questions not sorted in helpfulness already
    return fetchedData;
  };

  // useEffect(() => {
  //   getData('17080');
  // }, []);

  useEffect(() => {
    getQAList()
      .then((fetched) => {
        if (fetched) {
          const sorted = fetched.sort((a, b) => ((a.question_helpfulness > b.question_helpfulness) ? -1 : 1));
          setData(sorted);
        }
      })
      .catch((err) => console.log(err));
  }, [currentProduct]);

  const loadMore = () => {
    expanded ? setDefaultQuestions(2) : setDefaultQuestions(data.length);
    setExpanded(!expanded);
  }

  return (
    <div>
      <h2>Questions & Answers</h2>
      <div>
        <QASearch />
        { data
          ? data.slice(0, defaultQuestions).map((q) => <Question question={q} key={q.question_id} />)
          : 'Loading..'}
        {data.length > 2 ? (
          <a className="expand-questions-btn" onClick={loadMore}>
            {expanded ? (
              <span>COLLAPSE QUESTIONS</span>
            ) : (
              <span>MORE ANSWERED QUESTIONS</span>
            )}
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default QAList;
