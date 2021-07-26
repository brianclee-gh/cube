import React from 'react';
import './ProductInfo.css';
// eslint-disable-next-line import/extensions
import Styles from './Styles.jsx';
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars

function ProductInfo({currentProduct, currentStyle}) {
  const productStyles = currentStyle.results;

//current style price
// current SKU
// current Image Array

  return (
    <div className="Product-InfoAll">
      <div className="Product-Info-Top">
        <h3>{currentProduct.category}</h3>
        <h2>{currentProduct.name}</h2>
        <span>{currentProduct.default_price}</span>
      </div>
      <div className="Product-Info-Mid">
        <div className="Style-Title">
          Style &gt;
          {productStyles[0].name}
        </div>
        {productStyles.map((style, index) => (
          <Styles style={style} key={productStyles[index].style_id} />
        ))}
      </div>
      <div>Add Cart Section</div>
    </div>
  );
}

export default ProductInfo;
