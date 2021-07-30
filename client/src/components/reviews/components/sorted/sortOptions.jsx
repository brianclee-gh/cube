import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ProductsContext } from '../../../state/ProductsContext.jsx';
import { ReviewsContext } from '../../../state/ReviewsContext.jsx';
import './sorted.css';
import MetaRate from './viewList/metaData/metaRate.jsx';
import ViewList from './viewList/reviewList/viewList.jsx';

function sortReviews() {
  const { currentProduct } = useContext(ProductsContext);
  const { getReviews, reviews, getReviewMetaData, metaData, ratings, getRatings } = useContext(ReviewsContext);

  const getReviewList = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    await getReviews(productId, 1);
    return reviews;
  };

  const getMetaData = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    await getReviewMetaData(productId);
    return metaData;
  };

  useEffect(() => {
    getReviewList()
      .then()
      .catch((err) => console.log(err));
  }, [currentProduct]);

  useEffect(() => {
    getMetaData()
      .then()
      .catch((err) => console.log(err));
  }, [currentProduct]);

  useEffect(() => {
    getRatings(metaData);
  }, [metaData]);

  if (currentProduct !== null && ratings !== null) {
    return (
      <div>
        <MetaRate />
        <ViewList />
      </div>
    );
  } else {
    return null;
  }
}

export default sortReviews;