import React, { useContext } from 'react';
import './eachRate.css';
import { ReviewsContext } from '../../../../../../state/ReviewsContext.jsx';

function eachScoreList({ starOne, starTwo, starThree, starFour, starFive }) {
  const { metaData } = useContext(ReviewsContext);

  const oneClick = () => {
    starOne();
  };

  const twoClick = () => {
    starTwo();
  };

  const threeClick = () => {
    starThree();
  };

  const fourClick = () => {
    starFour();
  };

  const fiveClick = () => {
    starFive();
  };

  const ratingValue = (num) => {
    if (metaData.ratings[num] === undefined) {return 0}
    else {return metaData.ratings[num]}
  };

  const rating5 = ratingValue(5);
  const rating4 = ratingValue(4);
  const rating3 = ratingValue(3);
  const rating2 = ratingValue(2);
  const rating1 = ratingValue(1);

  const allMeta = () => {
    return  Number(rating5) + Number(rating4) + Number(rating3) + Number(rating2) + Number(rating1)
  };

  const totalPercent = allMeta();
  const width5 = {width: ((rating5/totalPercent) * 100).toFixed(2) + "%"};
  const width4 = {width: ((rating4/totalPercent) * 100).toFixed(2) + "%"};
  const width3 = {width: ((rating3/totalPercent) * 100).toFixed(2) + "%"};
  const width2 = {width: ((rating2/totalPercent) * 100).toFixed(2) + "%"};
  const width1 = {width: ((rating1/totalPercent) * 100).toFixed(2) + "%"};

  if (metaData !== null) {
    return (
      <div className="eachScoreListing">
        <div>Rating Breakdown</div>
        <div>applied filters(if only it has) remove all filters</div>
        <div className="eachScoreListing_body">
          <div className="eachScorelisting_stars" onClick={fiveClick} >
            <label>5 stars:</label>
              <div className="eachScoreListing_5">
                <div className="eachScoreListing_fill" style={width5}>
                  <span className="eachScoreListing_percentage">{width5.width}</span>
              </div>
            </div>
          </div>
          <label>{rating5}</label><br />
          <div className="eachScorelisting_stars" onClick={fourClick} >
            <label>4 stars:</label>
            <div className="eachScoreListing_5">
              <div className="eachScoreListing_fill" style={width4}>
                <span className="eachScoreListing_percentage">{width4.width}</span>
              </div>
            </div>
          </div>
          <label>{rating4}</label><br />
          <div className="eachScorelisting_stars" onClick={threeClick} >
            <label>3 stars:</label>
            <div className="eachScoreListing_5">
              <div className="eachScoreListing_fill" style={width3}>
                <span className="eachScoreListing_percentage">{width3.width}</span>
              </div>
           </div>
          </div>
          <label>{rating3}</label><br />
          <div className="eachScorelisting_stars" onClick={twoClick} >
            <label>2 stars:</label>
            <div className="eachScoreListing_5">
              <div className="eachScoreListing_fill" style={width2}>
                <span className="eachScoreListing_percentage">{width2.width}</span>
              </div>
            </div>
          </div>
          <label>{rating2}</label><br />
          <div className="eachScorelisting_stars" onClick={oneClick} >
            <label>1 stars:</label>
            <div className="eachScoreListing_5">
              <div className="eachScoreListing_fill" style={width1}>
                <span className="eachScoreListing_percentage">{width1.width}</span>
              </div>
            </div>
          </div>
          <label>{rating1}</label><br />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default eachScoreList;