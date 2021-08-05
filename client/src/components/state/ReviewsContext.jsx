import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ReviewsContext = createContext(null);

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [ratings, setRatings] = useState(null);
  const [filteredReview, setFilteredReview] = useState(null);

  const filterReview = (one, two, three, four, five) => {
    if (reviews !== null) {
      const newReview = reviews.filter((parameter) => parameter.rating === one || parameter.rating === two || parameter.rating === three || parameter.rating === four || parameter.rating === five);
      setFilteredReview(newReview);
    }
  };

  const getReviews = async (productId, page, count, sortBy) => {
    try {
      const fetchedReviews = await axios.get(`/reviews/?page=${page}&count=${count}&sort=${sortBy}&product_id=${productId}`);
      setReviews(fetchedReviews.data.results);
    } catch (e) {
      console.log('error fetching review data');
    }
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

  const postReview = async (data) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      };
      await axios.post('/reviews', requestOptions);
      console.log('successfully posted data');
    } catch (e) {
      console.log(e);
    }
  };

  const markHelpfulReview = async (reviewId) => {
    try {
      const requestOptions = { review_id: Number(reviewId) };
      await axios.put(`/reviews/${reviewId}/helpful`, requestOptions);
    } catch (e) {
      console.log(e);
    }
  };

  const reportReview = async (reviewId) => {
    try {
      const requestOptions = { review_id: Number(reviewId) };
      await axios.put(`/reviews/${reviewId}/report`, requestOptions);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setFilteredReview(reviews);
  }, [reviews]);

  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        metaData,
        getReviewMetaData,
        getReviews,
        getRatings,
        ratings,
        postReview,
        markHelpfulReview,
        reportReview,
        filterReview,
        filteredReview,
      }}
    >
      { children }
    </ReviewsContext.Provider>
  );
};
