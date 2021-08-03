/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const QAContext = createContext(null);

export const QAProvider = ({ children }) => {
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState(null);

  const getQuestions = async (productId, page, count) => {
    page = page || 1;
    count = count || 5;
    try {
      const fetchQuestions = await axios.get(`/qa/questions?product_id=${productId}&page=${page}&count=${count}`);
      // console.log(fetchQuestions.data);
      setQuestions(fetchQuestions.data.results);
      return fetchQuestions.data.results;
    } catch (e) {
      console.error(e);
    }
  };

  const getAnswers = async (questionId, page, count) => {
    page = page || 1;
    count = count || 2;
    try {
      const fetchAnswers = await axios.get(`/qa/questions/${questionId}/answers/?page=${page}&count=${count}`);
      setAnswers(fetchAnswers.data.results);
      return fetchAnswers.data.results;
    } catch (e) {
      console.log(e);
    }
  };

  const markQuestionHelpful = async (questionId) => {
    try {
      const markedHelpful = await axios.put(`/qa/questions/${questionId}/helpful`);
      return markedHelpful;
    } catch (e) {
      console.log(e);
    }
  };

  const markAnswerHelpful = async (answerId) => {
    try {
      const markedHelpful = await axios.put(`/qa/answers/${answerId}/helpful`);
      return markedHelpful;
    } catch (e) {
      console.log(e);
    }
  };

  const reportQuestion = async (questionId) => {
    try {
      const reported = await axios.put(`/qa/questions/${questionId}/report`);
      return reported;
    } catch (e) {
      console.log(e);
    }
  };

  const reportAnswer = async (answerId) => {
    try {
      const reported = await axios.put(`/qa/answers/${answerId}/report`);
      return reported;
    } catch (e) {
      console.log(e);
    }
  };

  const postAnswer = async (questionId, data) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      };
      await axios.post(`/add/answer/${questionId}`, requestOptions);
      console.log('successfully posted');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <QAContext.Provider
      value={{
        questions,
        answers,
        getQuestions,
        getAnswers,
        markQuestionHelpful,
        markAnswerHelpful,
        reportQuestion,
        reportAnswer,
        postAnswer,
      }}
    >
      { children }
    </QAContext.Provider>
  );
};
