/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import YourOutfitProducts from './YourOutfitProducts.jsx';
import { ProductsContext } from '../state/ProductsContext.jsx';

function YourOutfit({ cachedData, setCachedData }) {
  const [outfit, setOutfit] = useState(() => {
    const storedOutfit = localStorage.getItem('yourSavedOutfit');
    return storedOutfit !== null
      ? JSON.parse(storedOutfit)
      : {};
  });
  const { currentProduct, currentStyle } = useContext(ProductsContext);

  const addToOutfit = () => {
    if (outfit[currentProduct.id]) { return null; }
    const { id } = currentProduct;
    setOutfit((prevState) => ({
      ...prevState,
      [id]: currentProduct,
    }));
  };

  // useEffect(() => {
  //   // check local storage for outfit, if outfit does not exist, intialize with empty outfit object
  //   // if outfit does exist, intialize
  //   // need to save outfit after each addition and subtraction
  //   const savedOutfit = localStorage.getItem('yourSavedOutfit');
  //   if (!savedOutfit) {
  //     console.log('nothing here');
  //   } else {
  //     console.log('found', JSON.parse(savedOutfit));
  //   }
  // }, []);

  useEffect(() => {
    if (Object.keys(outfit).length > 0) {
      localStorage.setItem('yourSavedOutfit', JSON.stringify(outfit));
    } else if (Object.keys(outfit).length === 0) {
      localStorage.setItem('yourSavedOutfit', JSON.stringify({}));
    }
    console.log(outfit, 'set')
    // don't want to overwrite on load
  }, [outfit]);

  return (
    <div className="your-outfit-container">
      <div className="related-products-header">
        <h3>YOUR OUTFIT</h3>
      </div>
      { currentProduct && currentStyle ? (
        <YourOutfitProducts
          cachedData={cachedData}
          setCachedData={setCachedData}
          setOutfit={setOutfit}
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
