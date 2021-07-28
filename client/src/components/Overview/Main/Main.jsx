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
  const { currentProduct, currentStyle, getData } = useContext(ProductsContext);
  // const [current, setCurrent] = useState(getProductSampleData);
  // const [currentStyle, setStyle] = useState(productStyleSampleData);
  // const [current, setCurrent] = useState();
  // const [style, setStyle] = useState();
  // const [currentImages, setCurrentImages] = useState(currentStyle.results);
  // need to store style image array here, pass to image component,
  // pass a function down to update it based on style click
  useEffect(() => {
    getData('17067');
  }, []);

  return (
    <div className="Overview-Main">
      {/* <Image images={currentImages} /> */}
      {currentProduct && currentStyle ? (<ProductInfo currentProduct={currentProduct} currentStyle={currentStyle} />) : 'Loading...'}
      <Description />
    </div>
  );
}

export default Main;
