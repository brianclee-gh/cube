/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ProductsContext } from '../../state/ProductsContext.jsx';
import Image from '../Image/Image.jsx';
import ProductInfo from '../ProductInfo/ProductInfo.jsx';
import Description from '../Description/Description.jsx';
import './Main.css';

function Main() {
  // console.log(getProductSampleData);
  const { currentProduct, currentStyle, getData } = useContext(ProductsContext);
  // const [current, setCurrent] = useState(getProductSampleData);
  // const [currentStyle, setStyle] = useState(productStyleSampleData);
  // const [current, setCurrent] = useState();
  // const [style, setStyle] = useState();
  // const [currentImages, setCurrentImages] = useState(currentStyle.results);
  // need to store style image array here, pass to image component,
  // pass a function down to update it based on style click
  const [photoArray, setPhotoArray] = useState(null);

  useEffect(() => {
    getData('17072');
  }, []);

  // useEffect(() => {
  //   setPhotoArray(currentStyle.results[0]);
  // }, []);

  return (
    <div className="Overview-Section">
      {currentProduct && currentStyle ? (
        <>
          <Image images={photoArray || currentStyle.results[0].photos} />
          <ProductInfo
            currentProduct={currentProduct}
            currentStyle={currentStyle}
            getPhotos={(style) => setPhotoArray(style.photos)}
          />
          <Description
            currentDescription={currentProduct.description}
            features={currentProduct.features}
            slogan={currentProduct.slogan}
          />
        </>
      ) : 'Loading...'}
    </div>
  );
}

export default Main;
