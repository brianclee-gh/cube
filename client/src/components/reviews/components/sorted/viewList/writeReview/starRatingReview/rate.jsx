import React, { useState } from 'react';
import './Rate.css';

const star = ({change}) => {
  const [starDescription, setStarDescription] = useState(null);

  const starRateDescriptionOne = () => {
    setStarDescription('Poor');
    change(1);
  };

  const starRateDescriptionTwo = () => {
    setStarDescription('Fair');
    change(2);
  };

  const starRateDescriptionThree = () => {
    setStarDescription('Average');
    change(3);
  };

  const starRateDescriptionFour = () => {
    setStarDescription('Good');
    change(4);
  };

  const starRateDescriptionFive = () => {
    setStarDescription('Great');
    change(5);
  };

  return (
    <div className="writeReviewRating_body">
      <div className="writeReviewRating_title">Overall rating *</div>
      <div className="writeReviewRating">
        <input type="radio" name="star" id="rate5" value="5" onClick={starRateDescriptionFive} required/>
        <label htmlFor="rate5" />
        <input type="radio" name="star" id="rate4" value="4" onClick={starRateDescriptionFour} />
        <label htmlFor="rate4" />
        <input type="radio" name="star" id="rate3" value="3" onClick={starRateDescriptionThree} />
        <label htmlFor="rate3" />
        <input type="radio" name="star" id="rate2" value="2" onClick={starRateDescriptionTwo} />
        <label htmlFor="rate2" />
        <input type="radio" name="star" id="rate1" value="1" onClick={starRateDescriptionOne} />
        <label htmlFor="rate1" />
      </div>
      <div className="writeReviewRating_description">{starDescription}</div>
    </div>

  );
};

export default star;
