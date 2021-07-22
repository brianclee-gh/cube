import React, { useContext } from 'react';
import axios from 'axios';
import { GITHUB_KEY, ATELIER_URL } from '../../../config';
// import GH key from config
// connect to related products and ratings/review

// create Context
export const ReviewsContext = React.createContext();

const ReviewsProvider = ({ children }) => {
  // const {
  //   setRelatedProductsIds, setRelatedProducts, setProductStyles
  // } = useContext(RelatedProductsContext);

  const getReviews = async (productId, sortBy) => {
    const customOptions = {
      headers: { Authorization: GITHUB_KEY },
      sort: sortBy,
      product_id: productId,
    };
    const reviews = await axios.get(`${ATELIER_URL}reviews`, customOptions);
    // has sort options (newest, helpful, relevant)
    return reviews;
  };

  const getReviewMetaData = async (productId) => {
    const customOptions = {
      headers: { Authorization: GITHUB_KEY },
      product_id: productId,
    };
    const metaData = await axios.get(`${ATELIER_URL}reviews/meta`, customOptions);
    return metaData;
  };

  const addReview = async (review) => {
    const {
      // eslint-disable-next-line camelcase
      product_id, rating, summary, body, recommend,
      name, email, photos, characteristics,
    } = review;
    const reviewBody = {
      product_id,
      rating,
      summary,
      body,
      recommend,
      name,
      email,
      photos,
      characteristics,
    };
    const response = await axios.post(`${ATELIER_URL}reviews`, reviewBody);
    return response;
  };

  const markHelpfulReview = async (reviewId) => {
    const response = await axios.put(`${ATELIER_URL}reviews/${reviewId}/helpful`, { review_id: reviewId });
    return response;
  };

  const reportReview = async (reviewId) => {
    const response = await axios.put((`${ATELIER_URL}reviews/${reviewId}/report`, { review_id: reviewId }));
    return response;
  }

  return (
    <ReviewsContext.ReviewsProvider
      value={{
        getReviewMetaData,
        getReviews,
        addReview,
        markHelpfulReview,
        reportReview,
      }}
    >
      { children }
    </ReviewsContext.ReviewsProvider>
  );
};

export default ReviewsProvider;
