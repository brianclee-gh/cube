/* eslint-disable import/extensions */
import React, { useState, useContext } from 'react';
import OutfitCard from './OutfitCard.jsx';
import { ProductsContext } from '../state/ProductsContext.jsx';

function YourOutfit() {
  const [outfit, setOutfit] = useState({});
  const { currentProduct } = useContext(ProductsContext);

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
      { Object.keys(outfit).length > 0
        ? Object.keys(outfit).map((i) => <div key={outfit[i].id}>{outfit[i].name}</div>)
        : <div role="button" data-btn="add-to-outfit" className="your-outfit-add" onClick={addToOutfit} tabIndex="-1" onKeyDown={() => {}}>+</div>}
    </div>
  );
}

export default YourOutfit;
