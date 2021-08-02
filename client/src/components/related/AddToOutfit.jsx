/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Hover from './helperFunctions/Hover.jsx';
import starRating from '../reviews/components/averageReview/metaRate.jsx';

function AddToOutfit({ currentProduct, currentStyle, addToOutfit }) {
  const [metaData, setMetaData] = useState(null);
  const [loading, setLoading] = useState(true);
  let isMounted = false;
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

  const getMetaData = async () => {
    if (!isMounted) { return null; }
    const fetchedMeta = await axios.get(`/reviews/meta/?product_id=${currentProduct.id}`);
    return fetchedMeta.data;
  };

  useEffect(() => {
    setLoading(true);
    isMounted = true;
    if (isMounted) {
      getMetaData()
        .then((data) => {
          if (data) {
            setMetaData(data);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    return () => {
      isMounted = false;
    };
  }, [currentProduct]);

  return (
    <>
      <li className="outfit-card-container" id="outfit_0">
        <div>
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
              { metaData ? <span className="related-product-stars">{starRating(getStars(metaData))}</span> : ''}
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default AddToOutfit;
