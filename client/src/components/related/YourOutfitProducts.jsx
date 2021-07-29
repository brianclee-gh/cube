/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

function YourOutfitProducts({
  outfit,
  setOutfit,
  addToOutfit,
  currentProduct,
  currentStyle,
}) {
  const handleCardClick = (id) => {
    const outfitCopy = { ...outfit };
    delete outfitCopy[id];
    setOutfit(outfitCopy);
  };
  return (
    <div className="outfit-products-container">
      <ul>
        { !outfit[currentProduct.id] ? <AddToOutfit currentStyle={currentStyle} currentProduct={currentProduct} addToOutfit={addToOutfit} /> : ''}
        {/* if current product is not added yet */}
        {/* if there are outfits */}
        { Object.keys(outfit).length > 0
          ? Object.keys(outfit).map((fit) => (
            <OutfitCard
              handleCardClick={handleCardClick}
              product={outfit[fit]}
            />
          ))
          : '' }
      </ul>
    </div>
  );
}

export default YourOutfitProducts;
