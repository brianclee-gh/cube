import React, { useContext } from 'react';
import './eachRate.css';
import { ReviewsContext } from '../../../../../../state/ReviewsContext.jsx';

function eachScoreList() {
  const { metaData } = useContext(ReviewsContext);

  const ratingValue = (num) => {
    if (metaData.ratings[num] === undefined) {
      return 0;
    } else {
      return metaData.ratings[num];
    }
  };

  const rating5 = ratingValue(5);
  const rating4 = ratingValue(4);
  const rating3 = ratingValue(3);
  const rating2 = ratingValue(2);
  const rating1 = ratingValue(1);

  if (metaData !== null) {
    return (
      <div className="eachScoreListing">
        <div>Rating Breakdown</div>
        <div>applied filters(if only it has) remove all filters</div>
        <div className="eachScoreListing_5">5 stars: {rating5}</div>
        <div className="eachScoreListing_5">4 stars: {rating4}</div>
        <div className="eachScoreListing_5">3 stars: {rating3}</div>
        <div className="eachScoreListing_5">2 stars: {rating2}</div>
        <div className="eachScoreListing_5">1 stars: {rating1}</div>
      </div>
    );
  } else {
    return null;
  }
}

export default eachScoreList;