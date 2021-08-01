/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Carousel({ children, relatedOrOutfit }) {
  const childrenLength = relatedOrOutfit === 'related' ? children.length : children[1].length;
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(() => {
    const width = window.innerWidth;
    return (Math.floor(width / 350) >= childrenLength)
      ? childrenLength
      : Math.floor(width / 350);
  });
  const setId = relatedOrOutfit === 'related' ? 'card' : 'outfit';


  const scrollLeft = () => {
    const startCard = document.getElementById(`${setId}_${startIdx - 1}`);
    if (!startCard) { return; }
    startCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    setStartIdx(startIdx - 1);
    setEndIdx(endIdx - 1);
  };

  const scrollRight = () => {
    const startCard = document.getElementById(`${setId}_${endIdx}`);
    if (!startCard) { return; }
    startCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    setEndIdx(endIdx + 1);
    setStartIdx(startIdx + 1);
  };

  return (
    <div className="related-carousel">
      { startIdx <= 0 || ((window.innerWidth / 325) > childrenLength)
        ? ''
        : <button className="related-scroll-btn-left" type="button" onClick={scrollLeft}>Left</button>}
      <ul
        className="related-carousel"
      >
        { children }
      </ul>
      { endIdx >= childrenLength || ((window.innerWidth / 325) > childrenLength)
        ? ''
        : <button onClick={scrollRight} className="related-scroll-btn-right" type="button">Right</button>}

    </div>
  );
}

export default Carousel;
