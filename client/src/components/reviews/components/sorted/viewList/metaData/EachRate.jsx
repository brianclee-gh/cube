import React, { useContext } from 'react';
import './eachRate.css';
import { ReviewsContext } from '../../../../../state/ReviewsContext.jsx';

function eachScoreList({ star1, star2, star3, star4, star5, starOne, starTwo, starThree, starFour, starFive }) {
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

  const clickAll = () => {
    if (star1 === 1) {
      starOne();
    }
    if (star2 === 2) {
      starTwo();
    }
    if (star3 === 3) {
      starThree();
    }
    if (star4 === 4) {
      starFour();
    }
    if (star5 === 5) {
      starFive();
    }
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
        {star1 === 1 ? <button className="eachScoreListing_star1_button" onClick={oneClick}>1 star</button> : null}
        {star2 === 2 ? <button className="eachScoreListing_star1_button" onClick={twoClick}>2 star</button> : null}
        {star3 === 3 ? <button className="eachScoreListing_star1_button" onClick={threeClick}>3 star</button> : null}
        {star4 === 4 ? <button className="eachScoreListing_star1_button" onClick={fourClick}>4 star</button> : null}
        {star5 === 5 ? <button className="eachScoreListing_star1_button" onClick={fiveClick}>5 star</button> : null}
        {(star1 === 1 || star2 === 2 || star3 === 3 || star4 === 4 || star5 === 5)  ? <button className="eachScoreListing_star1_button" onClick={clickAll}>Remove</button> : null}
        <div className="eachScoreListing_body">
          <div className="eachScoreWrapper">

          <div className="eachScorelisting_stars" onClick={fiveClick} >
            <label className="starNumber" htmlFor="eachScoreListing_5">5 stars</label>
              <div id="eachScoreListing_5">
                <div className="eachScoreListing_fill" style={width5}>
                  {/* <span className="eachScoreListing_percentage">{width5.width}</span> */}
              </div>
            </div>
          <label className="eachScoreCount">{rating5}</label><br />

          </div>
          </div>

          <div className="eachScoreWrapper">
          <div className="eachScorelisting_stars" onClick={fourClick} >
            <label className="starNumber" htmlFor="eachScoreListing_5">4 stars</label>
            <div id="eachScoreListing_5">
              <div className="eachScoreListing_fill" style={width4}>
                {/* <span className="eachScoreListing_percentage">{width4.width}</span> */}
              </div>
            </div>
          <label htmlFor="eachScoreListing_5" className="eachScoreCount">{rating4}</label><br />
          </div>
          </div>

          <div className="eachScoreWrapper">
          <div className="eachScorelisting_stars" onClick={threeClick} >
            <label className="starNumber" htmlFor="eachScoreListing_5">3 stars</label>
            <div id="eachScoreListing_5">
              <div className="eachScoreListing_fill" style={width3}>
                {/* <span className="eachScoreListing_percentage">{width3.width}</span> */}
              </div>
           </div>
          <label htmlFor="eachScoreListing_5" className="eachScoreCount">{rating3}</label><br />
          </div>
          </div>

          <div className="eachScoreWrapper">
          <div className="eachScorelisting_stars" onClick={twoClick} >
            <label className="starNumber" htmlFor="eachScoreListing_5">2 stars</label>
            <div id="eachScoreListing_5">
              <div className="eachScoreListing_fill" style={width2}>
                {/* <span className="eachScoreListing_percentage">{width2.width}</span> */}
              </div>
            </div>
          <label htmlFor="eachScoreListing_5" className="eachScoreCount">{rating2}</label><br />
          </div>
          </div>

          <div className="eachScoreWrapper">
          <div className="eachScorelisting_stars" onClick={oneClick} >
            <label className="starNumber" htmlFor="eachScoreListing_5">1 stars</label>
            <div id="eachScoreListing_5">
              <div className="eachScoreListing_fill" style={width1}>
                {/* <span className="eachScoreListing_percentage">{width1.width}</span> */}
              </div>
            </div>
          <label htmlFor="eachScoreListing_5" className="eachScoreCount">{rating1}</label><br />

          </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default eachScoreList;