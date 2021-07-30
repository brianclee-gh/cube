import React, { createContext, useState } from 'react';
import axios from 'axios';

export const QAContext = createContext(null);

export const QAProvider = ({ children }) => {
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState(null);

  const getQuestions = async (productId, page, count) => {
    page = page || 1;
    count = count || 5;
    const customOptions = {
      page,
      count,
      product_id: productId,
    };
    try {
      const fetchQuestions = await axios.get(`/qa/questions?product_id=${productId}&page=${page}&count=${count}`, customOptions);
      setQuestions(fetchQuestions);
    } catch (e) {
      console.error(e);
    }
  };

  const getAnswers = async (questionId, page, count) => {
    page = page || 1;
    count = count || 2;
    const customOptions = {
      page,
      count,
      question_id: questionId,
    };
    try {
      const fetchAnswers = await axios.get(`/qa/questions/${questionId}/answers/?page=${page}&count=${count}`, customOptions);
      setAnswers(fetchAnswers);
    //   return fetchAnswers;
    } catch (e) {
      console.log(e);
    }
};

  // when currentProduct changes...
  // update reviews, styles, metadata, etc... maybe useEffect?

  // const addReview = async (review) => {
  //   const {
  //     // eslint-disable-next-line camelcase
  //     product_id, rating, summary, body, recommend,
  //     name, email, photos, characteristics,
  //   } = review;
  //   const reviewBody = {
  //     product_id,
  //     rating,
  //     summary,
  //     body,
  //     recommend,
  //     name,
  //     email,
  //     photos,
  //     characteristics,
  //   };
  //   const response = await axios.post(`${ATELIER_URL}reviews`, reviewBody);
  //   return response;
  // };

  // const markHelpfulReview = async (reviewId) => {
  //   const response = await axios.put(`${ATELIER_URL}reviews/${reviewId}/helpful`, { review_id: reviewId });
  //   return response;
  // };

  // const reportReview = async (reviewId) => {
  // const response = await axios.put((`${ATELIER_URL}reviews/${reviewId}/report`, { review_id: reviewId }));
  //   return response;
  // };

  return (
    <QAContext.Provider
      value={{
        questions,
        answers,
        getQuestions,
        getAnswers,
      }}
    >
      { children }
    </QAContext.Provider>
  );
};
