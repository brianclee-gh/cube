import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ProductsContext } from '../../../state/ProductsContext.jsx';
import { ReviewsContext } from '../../../state/ReviewsContext.jsx';
import './sorted.css';
import MetaRate from './viewList/metaRate.jsx';
import ViewList from './viewList/viewList.jsx';

function sortReviews() {
  const { currentProduct, getData } = useContext(ProductsContext);
  const [reviewData, setReviewData] = useState([]);
  const [reviewMeta, setReviewMeta] = useState([]);

  const getReviewProductsIds = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    const reviewProductIds = await axios.get(`/reviews/?product_id=${productId}&page=`);
    return reviewProductIds.data;
  };

  const getMetaData = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    const reviewMetaData = await axios.get(`/reviews/meta/?product_id=${productId}`);
    return reviewMetaData.data;
  };

  useEffect(() => {
    getData('17067');
  }, []);

  useEffect(() => {
    getReviewProductsIds()
      .then((ids) => {
        setReviewData(ids);
      })
      .catch((err) => console.log(err));
  }, [currentProduct]);
  console.log(reviewData);

  useEffect(() => {
    getMetaData()
      .then((meta) => {
        setReviewMeta(meta);
      })
      .catch((err) => console.log(err));
  }, [currentProduct]);
  console.log(reviewMeta);

  return(
    <div>
      {/* <MetaRate />
      <ViewList /> */}
    </div>
  )
}

export default sortReviews;