import React, { useContext, useState, useEffect } from 'react';
import './metaData.css';
import StarRating from '../../../averageReview/metaRate.jsx';
import EachRate from './eachRate/eachRate.jsx';
import { ReviewsContext } from '../../../../../state/ReviewsContext.jsx';
import SizeComfort from './sizeComfort/sizeComfort.jsx';
import Recommendation from './recommendation/recommendation.jsx';

function metaRating({ starOne, starTwo, starThree, starFour, starFive }) {
  const { ratings } = useContext(ReviewsContext);
  const [starOnefunc, setStarOnefunc] = useState(null);
  const [starTwofunc, setStarTwofunc] = useState(null);
  const [starThreefunc, setStarThreefunc] = useState(null);
  const [starFourfunc, setStarFourfunc] = useState(null);
  const [starFivefunc, setStarFivefunc] = useState(null);

  const setStarOnefunction = () => {
    starOnefunc === 1 ? setStarOnefunc(0) : setStarOnefunc(1)
  };
  const setStarTwofunction = () => {
    starTwofunc === 2 ? setStarTwofunc(0) : setStarTwofunc(2)
  };
  const setStarThreefunction = () => {
    starThreefunc === 3 ? setStarThreefunc(0) : setStarThreefunc(3)
  };
  const setStarFourfunction = () => {
    starFourfunc === 4 ? setStarFourfunc(0) : setStarFourfunc(4)
  };
  const setStarFivefunction = () => {
    starFivefunc === 5 ? setStarFivefunc(0) : setStarFivefunc(5)
  };

  useEffect(() => {
    if(starOnefunc !== null) {
      starOne();
    }
  }, [starOnefunc]);

  useEffect(() => {
    if(starTwofunc !== null) {
      starTwo();
    }
  }, [starTwofunc]);

  useEffect(() => {
    if(starThreefunc !== null) {
      starThree();
    }
  }, [starThreefunc]);

  useEffect(() => {
    if(starFourfunc !== null) {
      starFour();
    }
  }, [starFourfunc]);

  useEffect(() => {
    if(starFivefunc !== null) {
      starFive();
    }
  }, [starFivefunc]);

  if (ratings !== null) {
    return (
      <div className="reviewMetaRating">
        <div className="reviewMetaRating_title">RATING & REVIEWS</div>
        <div className="reviewMetaRating_score">{ratings.starRatingOne}</div>
        <span className="reviewMetaRating_star">{StarRating(ratings.calculatedRating)}</span>
        <Recommendation />
        <EachRate star1={starOnefunc} star2={starTwofunc} star3={starThreefunc} star4={starFourfunc} star5={starFivefunc} starOne={setStarOnefunction} starTwo={setStarTwofunction} starThree={setStarThreefunction} starFour={setStarFourfunction} starFive={setStarFivefunction} />
        <SizeComfort />
      </div>
    );
  } else {
    return null;
  }
}

export default metaRating;