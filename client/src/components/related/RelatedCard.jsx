/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import starRating from '../reviews/components/averageReview/metaRate.jsx';

function RelatedCard({
  // product,
  // styles,
  // meta,
  handleCardClick,
  id,
  currentProduct,
}) {
  const [productData, setProductData] = useState(null);
  const [styleData, setStyleData] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const getStars = (metaData) => {
    if (!metaData) { return null; }
    const { ratings } = metaData;
    let totalReviews = 0;
    let totalRatings = 0;
    Object.keys(ratings).forEach((key) => {
      totalReviews += parseInt(ratings[key], 10);
      totalRatings += parseInt(ratings[key], 10) * parseInt(key, 10);
    });
    const calculatedRating = (totalRatings / totalReviews).toFixed(2);
    return (Math.round(calculatedRating * 4) / 4).toFixed(2);
    // return starRating;
  };

  const getRelatedData = async (ids) => {
    const fetchedProduct = await axios.get(`/products/${id}`);
    const fetchedStyle = await axios.get(`/products/${id}/styles`);
    const fetchedMeta = await axios.get(`/reviews/meta/?product_id=${id}`);
    return Promise.all([fetchedProduct.data, fetchedStyle.data, fetchedMeta.data]);
  };

  useEffect(async () => {
    const fetchedData = await getRelatedData(id);
    setProductData(fetchedData[0]);
    setStyleData(fetchedData[1]);
    setMetaData(fetchedData[2]);
  }, [currentProduct]);

  return (
    <li className="related-card-container">
      <div tabIndex="0" role="button" onClick={(e) => handleCardClick(e.target, id)} onKeyDown={() => {}}>
        {/* Card Upper: Image w/ Star icon */}
        { styleData && productData && metaData
          ? (
            <>
              <div className="related-image-container">
                <img className="related-product-img" src={`${styleData.results[0].photos[0].thumbnail_url}&ar=0.75:1&fit=crop`} alt="product" />
                <button type="button" aria-label="Save" className="related-action-btn"><FontAwesomeIcon icon={faStar} /></button>
              </div>
              <div className="related-card-info-container">
                <div className="related-card-info">
                  <span className="related-product-category">
                    {' '}
                    { productData.category.toUpperCase() }
                    {' '}
                  </span>
                  <span className="related-product-name">{ productData.name }</span>
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
                    : <span className="related-product-price">{styleData.results[0].original_price}</span>}
                  {/* <span className="related-product-stars">{starRating(getStars(meta))}</span> */}
                  {/* { styles.results[0].name } */}
                  {/* placeholder for STARS */}
                </div>
                {/* Card Lower: Info (Cat, Name, Price, Rating) */}
              </div>
            </>
          )
          : 'Loading...' }
        {/* { id
          ? (
            <>
              <div className="related-image-container">
                <img className="related-product-img" src={`${style.results[0].photos[0].thumbnail_url}&ar=0.75:1&fit=crop`} alt="product" />
                <button type="button" aria-label="Save" className="related-action-btn"><FontAwesomeIcon icon={faStar} /></button>
              </div>
              <div className="related-card-info-container">
                <div className="related-card-info">
                  <span className="related-product-category">
                    {' '}
                    { product.category.toUpperCase() }
                    {' '}
                  </span>
                  <span className="related-product-name">{ product.name }</span>
                  { styles.results[0].sale_price
                    ? (
                      <span className="related-product-price">
                        $
                        {styles.results[0].sale_price}
                        {' '}
                        <span className="related-original-price">
                          $
                          {styles.results[0].original_price }
                        </span>
                      </span>
                    )
                    : <span className="related-product-price">{styles.results[0].original_price}</span>}
                  <span className="related-product-stars">{starRating(getStars(meta))}</span>
                   { styles.results[0].name }
                  placeholder for STARS
                </div>
                Card Lower: Info (Cat, Name, Price, Rating)
              </div>
            </>
          )
          : 'Loading...' } */}
      </div>
    </li>
  );
}

export default RelatedCard;
