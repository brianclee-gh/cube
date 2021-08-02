/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Hover from './helperFunctions/Hover.jsx';

function AddToOutfit({ currentProduct, currentStyle, addToOutfit }) {
  return (
    <>
      <li className="outfit-card-container" id="outfit_0">
        <div className="outfit-image-container">
          <img className="outfit-product-img faded" src={`${currentStyle.photos[0].thumbnail_url}&ar=0.75:1&fit=crop`} alt="product" />
          <div
            role="button"
            data-btn="add-to-outfit"
            className="outfit-action-btn"
          >
            <Hover onHover={<div className="tooltip"> Add to outfit </div>}>
              <FontAwesomeIcon
                onClick={addToOutfit}
                tabIndex="-1"
                onKeyDown={() => {}}
                icon={faPlus}
              />
            </Hover>
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
              ? (
                <span className="outfit-product-price">
                  $
                  {currentStyle.sale_price}
                  {' '}
                  <span data-price="outfit-price" className="outfit-original-price">
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
