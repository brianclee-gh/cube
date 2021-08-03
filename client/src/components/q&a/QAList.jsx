/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
import { ProductsContext } from '../state/ProductsContext.jsx';
import QASearch from './QASearch.jsx';
import Question from './Question.jsx';
import QuestionModal from './QuestionModal.jsx';
import { QAContext } from '../state/QAContext.jsx';
import './qa-style.scss';

const QAList = () => {
  const { currentProduct, getData } = useContext(ProductsContext);
  const {
    getQuestions, questions, getAnswers, answers,
  } = useContext(QAContext);
  //   const [productId, setProductId] = useState(17067);
  const [data, setData] = useState([]);
  const [defaultQuestions, setDefaultQuestions] = useState(2);
  const [expanded, setExpanded] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const getQAList = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    const fetchedData = await getQuestions(productId, 1, 21);
    // might not be working.. cannot read property sort of undefined. but i can't find a productId that has questions not sorted in helpfulness already
    return fetchedData;
  };

  // useEffect(() => {
  //   getData('17071');
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
    // expanded ? setDefaultQuestions(2) : setDefaultQuestions(data.length);
    // setExpanded(!expanded);
    setDefaultQuestions(defaultQuestions + 2);
    if (defaultQuestions >= data.length) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    if (data != null) {
      if (data.length <= 2) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    }
  }, [data]);

  useEffect(() => {
    setDefaultQuestions(2);
    setExpanded(null);
  }, [currentProduct]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="qa-flex-container">
      <div className="qa-container">
        <h2 className="qa-header">Questions & Answers</h2>
        <QASearch />
        <div className="qa-list">
          { data
            ? data.slice(0, defaultQuestions).map((q) => <Question question={q} key={q.question_id} />)
            : 'Loading..'}
        </div>
        <div className="qa-list-btn-container">
          {expanded ? <button className="expand-btn" onClick={loadMore}>MORE ANSWERED QUESTIONS</button> : null}
          <QuestionModal
            modalOpen={modalOpen}
            closeModal={closeModal}
            openModal={openModal}
          />
        </div>
      </div>
    </div>
  );
};

export default QAList;
