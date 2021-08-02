import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../../../state/ProductsContext.jsx';
import { ReviewsContext } from '../../../state/ReviewsContext.jsx';
import './sorted.css';
import MetaRate from './viewList/metaData/metaRate.jsx';
import ViewList from './viewList/reviewList/viewList.jsx';
import Select from 'react-select'
import WriteReview from './viewList/writeReview/writeReview.jsx';

function sortReviews() {
  const { currentProduct } = useContext(ProductsContext);
  const { getReviews, reviews, getReviewMetaData, metaData, ratings, getRatings } = useContext(ReviewsContext);
  const [ currentSort, updateSort ] = useState('relevant');
  const [ showWriteReviewModal, setShowWriteReviewModal ] = useState(false);

  const sort = [
    { value: 'newest', label: 'Newest' },
    { value: 'helpful', label: 'Helpful' },
    { value: 'relevant', label: 'Relevant' },
  ];

  const getReviewList = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    await getReviews(productId, 1, 100000, currentSort);
    return reviews;
  };

  const getMetaData = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    await getReviewMetaData(productId);
    return metaData;
  };

  const handleSort = (e) => {
    updateSort(e.value);
  };

  const writeReviewModalPop = () => {
    setShowWriteReviewModal(true);
  };

  const hideReviewModalPop = () => {
    setShowWriteReviewModal(false);
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

  useEffect(() => {
    getReviewList()
      .then()
      .catch((err) => console.log(err));
  }, [currentSort]);

  if (currentProduct !== null && ratings !== null) {
    return (
      <div>
        <MetaRate />
        <div>Sort on:</div>
        <Select options={sort} onChange={handleSort} defaultValue={sort[2]} />
        <ViewList />
        <WriteReview show={showWriteReviewModal} handleClose={hideReviewModalPop} />
        <button type="button" className="writeReviewButton" onClick={writeReviewModalPop} >Write Review</button>
      </div>
    );
  } else {
    return null;
  }
}

export default sortReviews;