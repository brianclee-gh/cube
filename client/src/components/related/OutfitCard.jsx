/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import starRating from '../reviews/components/averageReview/metaRate.jsx';

function OutfitCard({
  product,
  handleCardClick,
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

  const getRelatedData = async () => {
    if (!isMounted) { return null; }
    const fetchedStyle = await axios.get(`/products/${product.id}/styles`);
    const fetchedMeta = await axios.get(`/reviews/meta/?product_id=${product.id}`);
    return Promise.all([
      setStyleData(fetchedStyle.data),
      setMetaData(fetchedMeta.data)]);
  };

  useEffect(() => {
    setLoading(true);
    isMounted = true;
    if (isMounted) {
      getRelatedData()
        .then((data) => {
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    return () => { isMounted = false; };
  }, []);

  return (
    <li className="outfit-card-container" key={uuidv4()}>
      <div tabIndex="0" role="button" onClick={() => {}} onKeyDown={() => {}}>
        { !loading ? (
          <>
            <div className="related-image-container">
              <img className="related-product-img" src={`${styleData.results[0].photos[0].thumbnail_url}&ar=0.75:1&fit=crop`} alt="product" />
              <button onClick={() => handleCardClick(product.id)} type="button" aria-label="Save" className="related-action-btn"><FontAwesomeIcon icon={faTimesCircle} /></button>
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
                  : <span className="related-product-price">{styleData.results[0].original_price}</span>}
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
