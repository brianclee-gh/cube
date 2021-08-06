import React, { useContext, useState, useEffect, lazy, Suspense } from 'react';
import { ProductsContext } from '../../../state/ProductsContext.jsx';
import { ReviewsContext } from '../../../state/ReviewsContext.jsx';
import './Sorted.css';
import MetaRate from './viewList/metaData/MetaRate.jsx';
import ViewList from './viewList/reviewList/ViewList.jsx';
import Select from 'react-select';
import './SortOptions.jsx';
// import WriteReview from './viewList/writeReview/WriteReview.jsx';

const WriteReview = lazy(() => import('./viewList/writeReview/WriteReview.jsx'));

function sortReviews() {
  const { currentProduct } = useContext(ProductsContext);
  const { getReviews, filterReview, reviews, filteredReview, getReviewMetaData, metaData, ratings, getRatings } = useContext(ReviewsContext);
  const [currentSort, updateSort] = useState('relevant');
  const [showWriteReviewModal, setShowWriteReviewModal] = useState(false);
  const [starOne, setStarOne] = useState(0);
  const [starTwo, setStarTwo] = useState(0);
  const [starThree, setStarThree] = useState(0);
  const [starFour, setStarFour] = useState(0);
  const [starFive, setStarFive] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  const reviewCountFiltered = () => {
    setReviewCount(filteredReview.length);
  };

  const starOneFunction = () => {
    starOne === 0 ? setStarOne(1) : setStarOne(0)
  };

  const starTwoFunction = () => {
    starTwo === 0 ? setStarTwo(2) : setStarTwo(0)
  };

  const starThreeFunction = () => {
    starThree === 0 ? setStarThree(3) : setStarThree(0)
  };

  const starFourFunction = () => {
    starFour === 0 ? setStarFour(4) : setStarFour(0)
  };

  const starFiveFunction = () => {
    starFive === 0 ? setStarFive(5) : setStarFive(0)
  };

  const sort = [
    { value: 'newest', label: 'Newest' },
    { value: 'helpful', label: 'Helpful' },
    { value: 'relevant', label: 'Relevant' },
  ];

  const getReviewList = async () => {
    if (!currentProduct) { return null; }
    const productId = currentProduct.id;
    await getReviews(productId, 1, 100000, currentSort);
    return filteredReview;
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
    filterReview(starOne, starTwo, starThree, starFour, starFive);
  }, [starOne, starTwo, starThree, starFour, starFive]);

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

  useEffect(() => {
    if (filteredReview) {
      reviewCountFiltered();
    }
  }, [filteredReview]);

  if (currentProduct !== null && ratings !== null) {
    return (
      <div className="sortOptions">
        <div className="sortedOptionMetaData">

        <MetaRate starOne={starOneFunction} starTwo={starTwoFunction} starThree={starThreeFunction} starFour={starFourFunction} starFive={starFiveFunction} />
        </div>

       <div className="sortOptionsReview_tile">

        <div className="sortStarReview_title">
          {reviewCount} reviews, sorted by
        </div>

        <Select options={sort} onChange={handleSort} defaultValue={sort[2]} />
        <ViewList starOne={starOne} starTwo={starTwo} starThree={starThree} starFour={starFour} starFive={starFive} />
        <Suspense fallback={<div>...Loading</div>}>
        <WriteReview show={showWriteReviewModal} sort={currentSort} handleClose={hideReviewModalPop} />
        </Suspense>

        <button type="button" className="writeReviewButton" onClick={writeReviewModalPop} >Write Review</button>

       </div>
      </div>
    );
  } else {
    return null;
  }
}

export default sortReviews;