import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ReviewsContext = createContext(null);

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [ratings, setRatings] = useState(null);

  const getReviews = async (productId, page, count, sortBy) => {
    page = page || 1;
    count = count || 5;
    sortBy = sortBy || 'newest';
    const customOptions = {
      page,
      count,
      sort: sortBy,
      product_id: productId,
    };
    const fetchedReviews = await axios.get(`/reviews/meta/?product_id=${productId}&count=${count}&page=${page}&sort=${sortBy}`, customOptions);
    setReviews(fetchedReviews);
  };

  const getReviewMetaData = async (productId) => {
    const fetchedMetaData = await axios.get(`/reviews/meta/?product_id=${productId}`);
    setMetaData(fetchedMetaData.data);
  };

  const getRatings = () => { // gives us both number rating and star rating, rounded to nearest 0.25
    if (!metaData) { return null; }
    const { ratings } = metaData;
    let totalReviews = 0;
    let totalRatings = 0;
    Object.keys(ratings).forEach((key) => {
      totalReviews += parseInt(ratings[key], 10);
      totalRatings += parseInt(ratings[key], 10) * parseInt(key, 10);
    });
    const calculatedRating = (totalRatings / totalReviews).toFixed(2);
    const starRating = (Math.round(calculatedRating * 4) / 4).toFixed(2);
    setRatings({ calculatedRating, starRating });
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
    <ReviewsContext.Provider
      value={{
        reviews,
        metaData,
        getReviewMetaData,
        getReviews,
        getRatings,
        ratings,
      }}
    >
      { children }
    </ReviewsContext.Provider>
  );
};
