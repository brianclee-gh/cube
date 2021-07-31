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

  const scrollLeft = () => {
    const startCard = document.getElementById(`card_${index - 1}`);
    if (!startCard) { return; }
    console.log(startCard);
    startCard.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    setIndex(index - 1);
  }

  const testScroll = () => {
    const startCard = document.getElementById(`card_${index + 1}`);
    if (!startCard) { return; }
    console.log(startCard);
    startCard.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    setIndex(index + 1);
  };

  return (
    <div className="related-carousel">
      <button className="related-scroll-btn-left" type="button" onClick={scrollLeft}>Left</button>
      <ul
        className={`related-carousel show-${show}`}
        // style={{ transform: `translateX(-${index * (100 / show)}%)` }}s
      >
        { children }
      </ul>
      <button onClick={testScroll} className="related-scroll-btn-right" type="button">Right</button>

    </div>
  );
}

export default Carousel;
