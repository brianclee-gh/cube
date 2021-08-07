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
          {/* <i className="fab fa-facebook-square" /> */}
          <div className="fb-share-button" data-href={isActive.url}><a target="_blank" rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1501088430049-71c79fa3283e%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" aria-label="fb-share"><i className="fab fa-facebook-square" /></a></div>
          <a className="twitter-share-button" href="https://twitter.com/intent/tweet"><i className="fab fa-twitter-square" /></a>
          <a href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F&media=https%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg&description=Next%20stop%3A%20Pinterest" aria-label="pinterest-share"><i className="fab fa-pinterest-square" /></a>
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
