/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
// eslint-disable-next-line import/extensions
import OutfitCard from './OutfitCard.jsx';
import { ProductsContext } from '../state/ProductsContext.jsx';

function YourOutfitProducts({
  outfit,
  addToOutfit,
  styles,
  currentProduct,
  currentStyle,
}) {
  // const currentProduct = useContext(ProductsContext);
  return (
    <div className="outfit-products-container">
      <ul>
        { Object.keys(outfit).length > 0
          ? Object.keys(outfit).map((fit) => <OutfitCard product={outfit[fit]} />)
          : (
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
          )}
      </ul>
    </div>
  );
}

export default YourOutfitProducts;
