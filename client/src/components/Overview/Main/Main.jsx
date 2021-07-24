/* eslint-disable import/extensions */
import React from 'react';
import Image from '../Image/Image.jsx';
import ProductInfo from '../ProductInfo/ProductInfo.jsx';
import Description from '../Description/Description.jsx';
import getProductSampleData from '../getProductSampleData.js';

function Main() {
  // console.log(getProductSampleData);
  return (
    <div>
      <h2>Main</h2>
      <Image />
      <ProductInfo product={getProductSampleData} />
      <Description />
    </div>
  );
}

export default Main;
