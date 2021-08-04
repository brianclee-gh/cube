/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import starRating from '../reviews/components/averageReview/metaRate.jsx';
import Hover from './helperFunctions/Hover.jsx';

function OutfitCard({
  product,
  handleOutfitClick,
  cachedData,
  setCachedData,
  index,
  reportClick,
}) {
  const [styleData, setStyleData] = useState({});
  const [metaData, setMetaData] = useState([]);
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

  const loadCachedData = (id) => {
    const data = cachedData[id];
    setStyleData(data[1]);
    setMetaData(data[2]);
  };

  const getRelatedData = async () => {
    if (!isMounted) { return null; }
    if (cachedData[product.id]) {
      loadCachedData(product.id);
      return null;
    }
    const fetchedStyle = await axios.get(`/products/${product.id}/styles`);
    const fetchedMeta = await axios.get(`/reviews/meta/?product_id=${product.id}`);
    return Promise.all([
      (product),
      (fetchedStyle.data),
      (fetchedMeta.data)]);
  };

  useEffect(() => {
    setLoading(true);
    isMounted = true;
    if (isMounted) {
      getRelatedData()
        .then((data) => {
          if (data) {
            setCachedData((prevState) => ({
              ...prevState,
              [product.id]: data,
            }));
            setStyleData(data[1]);
            setMetaData(data[2]);
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
  }, [product]);

  return (
    <li className="outfit-card-container" id={`outfit_${index}`} key={uuidv4()}>
      <div
        tabIndex="0"
        role="button"
        onClick={(e) => {
          reportClick(e, 'OutfitCard');
        }}
        onKeyDown={() => {}}
      >
        { !loading ? (
          <>
            <div className="related-image-container">
              { styleData.results[0].photos[0].thumbnail_url
                ? <img className="related-product-img" src={`${styleData.results[0].photos[0].thumbnail_url}&ar=0.75:1&fit=crop`} alt="product" />
                : <img className="related-product-img" src="https://images.unsplash.com/photo-1599839575338-31b11ae2cd16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80&ar=0.75:1" alt="product" />}
              <button
                onClick={(e) => handleOutfitClick(e, product.id)}
                type="button"
                aria-label="Save"
                className="fit-action-btn"
              >
                <Hover onHover={<div className="tooltip"> Remove from outfit </div>}>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </Hover>
              </button>
            </div>
            <div className="related-card-info-container">
              <div className="related-card-info">
                <span data-testid="category" className="related-product-category">
                  {' '}
                  { product.category.toUpperCase() }
                  {' '}
                </span>
                <span className="related-product-name">{ product.name }</span>
                { styleData.results[0].sale_price
                  ? (
                    <span className="related-product-price">
                      $
                      {styleData.results[0].sale_price}
                      {' '}
                      <span className="related-original-price">
                        $
                        {styleData.results[0].original_price }
                      </span>
                    </span>
                  )
                  : (
                    <span className="related-product-price">
                      $
                      {styleData.results[0].original_price}
                    </span>
                  )}
                { metaData.ratings ? <span className="related-product-stars">{starRating(getStars(metaData))}</span> : ''}
              </div>
            </div>
          </>
        )
          : 'Loading...' }
      </div>
    </li>
  );
}

export default OutfitCard;
