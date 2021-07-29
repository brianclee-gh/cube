/* eslint-disable react/prop-types */
import React from 'react';

function AddToOutfit({ currentProduct, currentStyle, addToOutfit }) {
  return (
    <>
      <li className="outfit-card-container">
        <div className="outfit-image-container">
          <img className="outfit-product-img faded" src={`${currentStyle.photos[0].thumbnail_url}&ar=0.75:1&fit=crop`} alt="product" />
          <div
            role="button"
            data-btn="add-to-outfit"
            className="outfit-action-btn"
            onClick={addToOutfit}
            tabIndex="-1"
            onKeyDown={() => {}}
          >
            +
          </div>
        </div>
        <div className="outfit-card-info-container">
          <div className="outfit-card-info">
            <span className="outfit-product-category">
              {' '}
              { currentProduct.category.toUpperCase() }
              {' '}
            </span>
            <span className="outfit-product-name">{ currentProduct.name }</span>
            { currentStyle.sale_price
            // styles.results[0].sale_price
              ? (
                <span className="outfit-product-price">
                  $
                  {currentStyle.sale_price}
                  {' '}
                  <span className="outfit-original-price">
                    $
                    {currentStyle.original_price }
                  </span>
                </span>
              )
              : (
                <span className="outfit-product-price">
                  $
                  {currentStyle.original_price}
                </span>
              )}
            {/* <span className="outfit-product-stars">{starRating(getStars(meta))}</span> */}

          </div>
        </div>
      </li>
    </>
  );
}

export default AddToOutfit;
