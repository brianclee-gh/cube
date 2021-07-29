/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Carousel({ children, show }) {
  const [index, setIndex] = useState(0);

  const decrementIndex = () => {
    if (index <= 0) { return; }
    setIndex(index - 1);
  };

  const incrementIndex = () => {
    if (index >= show - 1) { return; }
    setIndex(index + 1);
  };
  return (
    <div className="related-carousel">
      <button className="related-scroll-btn-left" type="button" onClick={decrementIndex}>Left</button>
      <ul
        className={`related-carousel show-${show}`}
        style={{ transform: `translateX(-${index * (100 / show)}%)` }}
      >
        { children }
      </ul>
      <button onClick={incrementIndex} className="related-scroll-btn-right" type="button">Right</button>

    </div>
  );
}

export default Carousel;
