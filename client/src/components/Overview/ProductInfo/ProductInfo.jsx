import React, {useState} from 'react';
import './ProductInfo.css';
// eslint-disable-next-line import/extensions
import Styles from './Styles.jsx';
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars

function ProductInfo({currentProduct, currentStyle}) {
  const productStyles = currentStyle.results;
  //current style price
  const [currentPrice, setCurrentPrice] = useState(productStyles[0].original_price);
  const [salePrice, setSalePrice] = useState();
  // current SKU
  // current Image Array

  // UPDATE PRICE CLICK HANDLER
  const updatePrice = (style) => {
    if (style.sale_price !== null) {
      setSalePrice(style.sale_price);
    } else {
      setSalePrice();
      setCurrentPrice(style.original_price);
    }
  };

  return (
    <div className="Product-InfoAll">
      <div className="Product-Info-Top">
        <h3>{currentProduct.category}</h3>
        <h2>{currentProduct.name}</h2>
        <span className={salePrice ? 'isSale' : null}>{currentPrice}</span>
        <span className="salePrice">{salePrice}</span>
      </div>
      <div className="Product-Info-Mid">
        <div className="Style-Title">
          Style &gt;
          {productStyles[0].name}
        </div>
        {productStyles.map((style, index) => (
          <Styles style={style}
            key={productStyles[index].style_id}
            price={() => { updatePrice(style); }}
          />
        ))}
      </div>
      <div>Add Cart Section</div>
    </div>
  );
}

export default ProductInfo;
