/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ProductsContext } from '../../state/ProductsContext.jsx';
import Image from '../Image/Image.jsx';
import ProductInfo from '../ProductInfo/ProductInfo.jsx';
import Description from '../Description/Description.jsx';
import getProductSampleData from '../getProductSampleData.js';
import productStyleSampleData from '../productStyleSampleData.js';

function Main() {
  // console.log(getProductSampleData);
  const { currentProduct, currentStyle, getCurrentStyle, getCurrentProduct } = useContext(ProductsContext);
  // const [current, setCurrent] = useState(getProductSampleData);
  // const [currentStyle, setStyle] = useState(productStyleSampleData);
  const [current, setCurrent] = useState();
  const [style, setStyle] = useState();
  // const [currentImages, setCurrentImages] = useState(currentStyle.results);
  // need to store style image array here, pass to image component,
  // pass a function down to update it based on style click
  useEffect(() => {
    getCurrentStyle('17067');
    getCurrentProduct('17067');
    // .then(() => {setCurrent(currentProduct)});
  }, []);

  return (
    <div>
      {console.log(currentProduct)}
      <h2>Main</h2>
      {/* <Image images={currentImages} /> */}
      {currentProduct && currentStyle ? (<ProductInfo currentProduct={currentProduct} currentStyle={currentStyle} />) : 'Loading...'}
      <Description />
    </div>
  );
}

export default Main;
