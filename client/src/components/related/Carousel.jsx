/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Carousel({ children, relatedOrOutfit }) {
  const [index, setIndex] = useState(0);
  const setId = relatedOrOutfit === 'related' ? 'card' : 'outfit';

  const scrollLeft = () => {
    const startCard = document.getElementById(`${setId}_${index - 1}`);
    if (!startCard) { return; }
    startCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    setIndex(index - 1);
  };

  const testScroll = () => {
    const startCard = document.getElementById(`${setId}_${index + 1}`);
    if (!startCard) { return; }
    startCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    setIndex(index + 1);
  };

  return (
    <div className="related-carousel">
      <button className="related-scroll-btn-left" type="button" onClick={scrollLeft}>Left</button>
      <ul
        className="related-carousel"
      >
        { children }
      </ul>
      <button onClick={testScroll} className="related-scroll-btn-right" type="button">Right</button>

    </div>
  );
}

export default Carousel;
