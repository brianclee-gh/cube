/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import './ProductInfo.css';
import Styles from './Styles.jsx';
import StarComponent from './StarComponent.jsx';
import AddToCart from './AddToCart.jsx';

function ProductInfo({ currentProduct, currentStyle, getPhotos }) {
  const productStyles = currentStyle.results;

  // current style price
  const [currentPrice, setCurrentPrice] = useState(productStyles[0].original_price);
  // current sale price
  const [salePrice, setSalePrice] = useState();
  // current SKU Stores Quantity and Sizes
  const [currentSku, setCurrentSku] = useState(productStyles[0].skus);
  // current Style Title
  const [currentStyleTitle, setCurrentStyleTitle] = useState(productStyles[0].name);
  // useEffect to watch for global style change to update price, title, salePrice
  useEffect(() => {
    setCurrentPrice(productStyles[0].original_price);
    setCurrentStyleTitle(productStyles[0].name);
    setSalePrice();
  }, [currentStyle]);

  // Set checkmark to Initial Style
  const [isActive, setActive] = useState(productStyles[0]);
  // sets active checkmark based on index of style selected
  const changeActive = (index) => {
    setActive(productStyles[index]);
  };

  // UPDATE PRICE CLICK HANDLER
  const updateCurrent = (style) => {
    if (style.sale_price !== null) {
      setSalePrice(style.sale_price);
    } else {
      setSalePrice();
      setCurrentPrice(style.original_price);
    }
    setCurrentSku(style.skus);
    setCurrentStyleTitle(style.name);
    getPhotos(style);
  };

  useEffect(() => {
    setCurrentSku(productStyles[0].skus);
    setActive(productStyles[0]);
  }, [currentStyle]);

  return (
    <div className="Product-InfoAll">
      <div className="Product-Info-Top">
        <StarComponent productID={currentProduct.id} />
        <h3 className="product-category">{currentProduct.category}</h3>
        <h2 className="product-name">{currentProduct.name}</h2>
        <div className="Prices">
          <span className={salePrice ? 'isSale' : null}>
            $
            {currentPrice}
          </span>
          {' '}
          <span className="salePrice">{salePrice ? `$${salePrice}` : salePrice}</span>
        </div>
        <div className="Share-Buttons">
          <i className="fab fa-facebook-square" />
          <i className="fab fa-twitter-square" />
          <i className="fab fa-pinterest-square" />
        </div>
      </div>
      <div className="Product-Info-Mid">
        <div className="Style-Title">
          <b>STYLE &gt; </b>
          {' '}
          {currentStyleTitle}
        </div>
        {productStyles.map((style, index) => (
          <Styles
            style={style}
            key={productStyles[index].style_id}
            current={() => { updateCurrent(style); changeActive(index); }}
            isActive={isActive}
          />
        ))}
      </div>
      <div className="Product-Info-Bottom">
        <AddToCart sku={currentSku} />
      </div>
    </div>
  );
}

export default ProductInfo;
