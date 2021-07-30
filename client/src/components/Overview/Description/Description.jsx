import React from 'react';
import './Description.css';

function Description({ currentDescription, features, slogan }) {
  return (
    <div className="Description">
      <div className="product-description">
        <div className="description-slogan">{slogan}</div>
        <div className="description">{currentDescription}</div>
      </div>
      <ul className="feature-list">
        {features.map((item) => (
          <li className="feature" key={item.feature}>
            {item.feature}
            :
            {' '}
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Description;
