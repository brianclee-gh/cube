import React from 'react';

function Carousel({ children }) {
  return (
    <ul className="related-carousel">
      { children }
    </ul>
  );
}

export default Carousel;
