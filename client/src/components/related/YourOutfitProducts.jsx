/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

function YourOutfitProducts({
  outfit,
  setOutfit,
  addToOutfit,
  currentProduct,
  currentStyle,
  cachedData,
  setCachedData,
}) {
  const handleOutfitClick = (id) => {
    const outfitCopy = { ...outfit };
    delete outfitCopy[id];
    setOutfit(outfitCopy);
  };
  return (
    <div className="outfit-products-container">
      <ul>
        { !outfit[currentProduct.id] ? <AddToOutfit currentStyle={currentStyle} currentProduct={currentProduct} addToOutfit={addToOutfit} /> : ''}
        { Object.keys(outfit).map((fit) => (
          <OutfitCard
            key={uuidv4()}
            handleOutfitClick={handleOutfitClick}
            product={outfit[fit]}
            cachedData={cachedData}
            setCachedData={setCachedData}
          />
        )) }
        {/* { Object.keys(outfit).length > 0
          ? Object.keys(outfit).map((fit) => (
            <OutfitCard
              key={uuidv4()}
              handleOutfitClick={handleOutfitClick}
              product={outfit[fit]}
            />
          ))
          : '' } */}
      </ul>
    </div>
  );
}

export default YourOutfitProducts;
