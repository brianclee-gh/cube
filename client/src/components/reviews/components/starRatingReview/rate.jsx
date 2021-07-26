import React from 'react';
import './review.css';

const star = () => (
  <div className="rating">
    <input type="radio" name="star" id="rate1" /><label for="rate1" />
    <input type="radio" name="star" id="rate2" /><label for="rate2" />
    <input type="radio" name="star" id="rate3" /><label for="rate3" />
    <input type="radio" name="star" id="rate4" /><label for="rate4" />
    <input type="radio" name="star" id="rate5" /><label for="rate5" />
    
  </div>
);

export default star;