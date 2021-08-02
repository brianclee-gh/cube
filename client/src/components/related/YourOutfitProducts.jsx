/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';
import Carousel from './Carousel.jsx';

function YourOutfitProducts({
  outfit,
  setOutfit,
  addToOutfit,
  currentProduct,
  currentStyle,
  cachedData,
  setCachedData,
}) {
  const handleOutfitClick = (e, id) => {
    if (e.target.className.includes('hover__no-hover')) {
      const outfitCopy = { ...outfit };
      delete outfitCopy[id];
      setOutfit(outfitCopy);
    }
  };

  return (
    <div className="outfit-products-container">
      <ul>
        <Carousel relatedOrOutfit="outfit">
          { !outfit[currentProduct.id] ? <AddToOutfit currentStyle={currentStyle} currentProduct={currentProduct} addToOutfit={addToOutfit} /> : ''}
          { Object.entries(outfit).map((data, index) => (
            <OutfitCard
              key={uuidv4()}
              handleOutfitClick={handleOutfitClick}
              product={data[1]}
              cachedData={cachedData}
              setCachedData={setCachedData}
              index={!outfit[currentProduct.id] ? index + 1 : index}
            />
          )) }
        </Carousel>
      </ul>
    </div>
  );
}

export default YourOutfitProducts;
