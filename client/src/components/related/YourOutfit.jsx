/* eslint-disable import/extensions */
import React, { useState, useContext } from 'react';
// import OutfitCard from './OutfitCard.jsx';
import YourOutfitProducts from './YourOutfitProducts.jsx';
import { ProductsContext } from '../state/ProductsContext.jsx';

function YourOutfit() {
  const [outfit, setOutfit] = useState({});
  const { currentProduct, currentStyle } = useContext(ProductsContext);

  const addToOutfit = () => {
    if (outfit[currentProduct.id]) { return null; }
    const { id } = currentProduct;
    setOutfit((prevState) => ({
      ...prevState,
      [id]: currentProduct,
    }));
    // add currentProduct obj or just id?
    // const newOutfit = outfit.slice();
    // newOutfit.push(currentProduct);
    // // make sure this doesn't add more than once
    // setOutfit(newOutfit);
  };

  return (
    <div className="your-outfit-container">
      <div className="related-products-header">
        <h3>YOUR OUTFIT</h3>
      </div>
      { currentProduct ? (
        <YourOutfitProducts
          outfit={outfit}
          addToOutfit={addToOutfit}
          currentProduct={currentProduct}
          currentStyle={currentStyle.results[0]}
        />
      ) : 'Loading'}
    </div>
  );
}

export default YourOutfit;
