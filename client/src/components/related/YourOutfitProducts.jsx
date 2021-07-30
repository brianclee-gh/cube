/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
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


  useEffect(() => {
    console.log('da f')
  }, [])

  return (
    <div className="outfit-products-container">
      <ul>
        { !outfit[currentProduct.id] ? <AddToOutfit currentStyle={currentStyle} currentProduct={currentProduct} addToOutfit={addToOutfit} /> : ''}
        { Object.entries(outfit).map(([id, data]) => (
          <OutfitCard
            key={uuidv4()}
            handleOutfitClick={handleOutfitClick}
            product={data}
            cachedData={cachedData}
            setCachedData={setCachedData}
          />
        )) }
      </ul>
    </div>
  );
}

export default YourOutfitProducts;
