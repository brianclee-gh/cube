/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import starRating from '../reviews/components/averageReview/metaRate.jsx';

function RelatedCard({
  relatedIds,
  handleCardClick,
  id,
}) {
  const [productData, setProductData] = useState({});
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
    const fetchedProduct = await axios.get(`/products/${id}`);
    const fetchedStyle = await axios.get(`/products/${id}/styles`);
    const fetchedMeta = await axios.get(`/reviews/meta/?product_id=${id}`);
    return Promise.all([
      setProductData(fetchedProduct.data),
      setStyleData(fetchedStyle.data),
      setMetaData(fetchedMeta.data)]);

    // await axios.get(`/products/${id}/relatedData`)
    //   .then((relatedData) => {
    //     console.log(relatedData);
    //     setProductData(relatedData.data[0]);
    //     setStyleData(relatedData.data[1]);
    //     setMetaData(relatedData.data[2]);
    //   });
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
          setLoading(false);
        });
    }
    return () => { isMounted = false; };
  }, [relatedIds]);

  return (
    <li className="related-card-container">
      <div tabIndex="0" role="button" onClick={(e) => handleCardClick(e, e.target, id, productData)} onKeyDown={() => {}}>
        { !loading
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

export default RelatedCard;
