import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ReviewsContext } from '../../../state/ReviewsContext.jsx';
import './sorted.css';

const sortReviews = () => {
  const { currentProduct, getCurrentProduct } = useContext(ProductsContext);
  const [reviewData, setReviewData] = useState([]);
  const [reviewMeta, setReviewMeta] = useState([]);

  const getReviewProductsIds = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    const reviewProductIds = await axios.get(`/reviews/?product_id=${productId}`);
    return reviewProductIds.data;
  };

  const getMetaData = async (productId) => {
    const reviewMetaData = await axios.get(`/reviews/meta/?product_id=${productId}`);
    return reviewMetaData.data;
  };

  const getReviewData = async (ids) => {
    if (!ids) { return null; }
    const fetchedReview = await Promise.all(
      ids.map(async (id) => {
        const review = await axios.get(`/reviews/?product_id=${id}`);
        return review.data;
      }),
    );
    const fetchedMetaReview = await Promise.all(
      ids.map(async (id) => {
        const meta = await axios.get(`/reviews/meta/?product_id=${id}`);
        return meta.data;
      }),
    );
    return Promise.all([fetchedReview, fetchedMetaReview]);
  };



  return(
    <div>
      hello, this is testing for the sorted option and the review list
    </div>
  )
}

export default sortReviews;