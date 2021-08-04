/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';
import Carousel from './Carousel.jsx';
import withClickTracker from '../shared/ClickTracker.jsx';

function YourOutfitProducts({
  outfit,
  setOutfit,
  addToOutfit,
  currentProduct,
  currentStyle,
  cachedData,
  setCachedData,
  metaData,
}) {
  const handleOutfitClick = (e, id) => {
    if (e.target.className.includes('hover__no-hover')) {
      const outfitCopy = { ...outfit };
      delete outfitCopy[id];
      setOutfit(outfitCopy);
    }
  };

  const TrackedAddToOutfit = withClickTracker(AddToOutfit);
  const TrackedOutfitCard = withClickTracker(OutfitCard);

  return (
    <div className="outfit-products-container">
      <Carousel relatedOrOutfit="outfit">
        { !outfit[currentProduct.id]
          ? (
            <TrackedAddToOutfit
              metaData={metaData}
              currentStyle={currentStyle}
              currentProduct={currentProduct}
              addToOutfit={addToOutfit}
            />
          )
          : ''}
        { Object.entries(outfit).map((data, index) => (
          <TrackedOutfitCard
            key={`${data[1].id}2`}
            handleOutfitClick={handleOutfitClick}
            product={data[1]}
            cachedData={cachedData}
            setCachedData={setCachedData}
            index={!outfit[currentProduct.id] ? index + 1 : index}
          />
        )) }
      </Carousel>
    </div>
  );
}

export default YourOutfitProducts;
