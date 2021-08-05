/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, {
  useState, useContext, useEffect, lazy, Suspense,
} from 'react';
// import YourOutfitProducts from './YourOutfitProducts.jsx';
import { ProductsContext } from '../state/ProductsContext.jsx';

const YourOutfitProducts = lazy(() => import('./YourOutfitProducts.jsx'));

function YourOutfit({ cachedData, setCachedData, metaData }) {
  const [outfit, setOutfit] = useState(() => {
    const storedOutfit = localStorage.getItem('yourSavedOutfit');
    return storedOutfit !== null
      ? JSON.parse(storedOutfit)
      : {};
  });
  const { currentProduct, currentStyle } = useContext(ProductsContext);

  const addToOutfit = () => {
    if (!outfit[currentProduct.id]) {
      const { id } = currentProduct;
      setOutfit((prevState) => ({
        ...prevState,
        [id]: currentProduct,
      }));
    }
  };

  useEffect(() => {
    if (Object.keys(outfit).length > 0) {
      localStorage.setItem('yourSavedOutfit', JSON.stringify(outfit));
    } else if (Object.keys(outfit).length === 0) {
      localStorage.setItem('yourSavedOutfit', JSON.stringify({}));
    }
    // don't want to overwrite on load
  }, [outfit]);

  return (
    <div className="your-outfit-container">
      <div className="related-products-header">
        <h3>YOUR OUTFIT</h3>
      </div>
      <Suspense fallback={<div className="related-products-placeholder">Loading...</div>}>
        { currentStyle ? (
          <YourOutfitProducts
            metaData={metaData}
            cachedData={cachedData}
            setCachedData={setCachedData}
            setOutfit={setOutfit}
            outfit={outfit}
            addToOutfit={addToOutfit}
            currentProduct={currentProduct}
            currentStyle={currentStyle.results[0]}
          />
        ) : <div className="related-products-placeholder">Loading...</div>}
      </Suspense>
      {/* { currentProduct && currentStyle ? (
        <YourOutfitProducts
          cachedData={cachedData}
          setCachedData={setCachedData}
          setOutfit={setOutfit}
          outfit={outfit}
          addToOutfit={addToOutfit}
          currentProduct={currentProduct}
          currentStyle={currentStyle.results[0]}
        />
      ) : 'Loading'} */}
    </div>
  );
}

export default YourOutfit;
