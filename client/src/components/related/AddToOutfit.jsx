/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Hover from './helperFunctions/Hover.jsx';
import starRating from '../reviews/components/averageReview/MetaRate.jsx';

function AddToOutfit({
  currentProduct, currentStyle, addToOutfit, reportClick, metaData,
}) {
  const getStars = (meta) => {
    if (!meta) { return null; }
    const { ratings } = meta;
    let totalReviews = 0;
    let totalRatings = 0;
    Object.keys(ratings).forEach((key) => {
      totalReviews += parseInt(ratings[key], 10);
      totalRatings += parseInt(ratings[key], 10) * parseInt(key, 10);
    });
    const calculatedRating = (totalRatings / totalReviews).toFixed(2);
    return (Math.round(calculatedRating * 4) / 4).toFixed(2);
  };

  return (
    <>
      <li className="outfit-card-container" id="outfit_0">
        <div role="button" tabIndex="-3" onClick={(e) => reportClick(e, 'AddToOutfit')} onKeyDown={() => {}}>
          <div className="outfit-image-container">
            {currentStyle.photos[0].thumbnail_url !== null
              ? <img className="outfit-product-img faded" src={`${currentStyle.photos[0].thumbnail_url}&ar=0.75:1&fit=crop`} alt="product" />
              : <img className="outfit-product-img faded" src="https://images.unsplash.com/photo-1599839575338-31b11ae2cd16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80&ar=0.75:1" alt="product" />}
            <div
              role="button"
              data-btn="add-to-outfit"
              className="outfit-action-btn"
              onClick={addToOutfit}
              tabIndex="-1"
              onKeyDown={() => {}}
            >
              <Hover onHover={<div className="tooltip"> Add to outfit </div>}>
                <FontAwesomeIcon
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
              { metaData ? <span className="related-product-stars">{starRating(getStars(metaData))}</span> : ''}
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default AddToOutfit;
