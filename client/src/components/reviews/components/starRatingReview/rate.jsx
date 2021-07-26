import React from 'react';
import './review.css';

const star = () => (
  <div className="rating">
    <input type="radio" name="star" id="rate1" /><label htmlFor="rate1" />
    <input type="radio" name="star" id="rate2" /><label htmlFor="rate2" />
    <input type="radio" name="star" id="rate3" /><label htmlFor="rate3" />
    <input type="radio" name="star" id="rate4" /><label htmlFor="rate4" />
    <input type="radio" name="star" id="rate5" /><label htmlFor="rate5" />
  </div>
);

export default star;