/* eslint-disable import/extensions */
import React, {useState} from 'react';
import Image from '../Image/Image.jsx';
import ProductInfo from '../ProductInfo/ProductInfo.jsx';
import Description from '../Description/Description.jsx';
import getProductSampleData from '../getProductSampleData.js';
import productStyleSampleData from '../productStyleSampleData.js';

function Main() {
  // console.log(getProductSampleData);
  const [current, setCurrent] = useState(getProductSampleData);
  const [currentStyle, setStyle] = useState(productStyleSampleData);
  const [currentImages, setCurrentImages] = useState(currentStyle.results);
  // need to store style image array here, pass to image component,
  // pass a function down to update it based on style click

  return (
    <div>
      <h2>Main</h2>
      <Image images={currentImages} />
      <ProductInfo currentProduct={current} currentStyle={currentStyle} />
      <Description />
    </div>
  );
}

export default Main;
