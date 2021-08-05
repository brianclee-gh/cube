/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddToCart({ sku }) {
  // quantity per size selected
  const [sizeQuantity, setSizeQuantity] = useState(0);
  // size selected in dropdown
  const [currentSize, setSize] = useState('1');
  // tracking Sku for possible checkout
  const [selectedSku, setSelectedSku] = useState('');
  // quantity selected from dropdown for checkout
  const [checkoutQuantity, setCheckoutQuantity] = useState('1');

  // Check for no Quantity in any size
  const checkNoQuant = (skus) => {
    let total = 0;
    const skuList = Object.entries(skus);
    skuList.forEach((item) => {
      total += item[1].quantity;
    });
    if (total === 0) {
      return false;
    }
    return true;
  };
  // boolean assignment for 'out of stock' render
  const [checkQuant, setQuant] = useState(checkNoQuant(sku));
  // checks for size quantities for sku prop changes
  useEffect(() => {
    setQuant(checkNoQuant(sku));
  });
  // sets size back to unselected if new style selected

  // Add to Cart Special Case- no Size Selected
  const [sizeSelected, setSizeSelected] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);

  useEffect(() => {
    setSize('');
    setSizeQuantity('1');
    setCheckoutQuantity('1');
    setCartClicked(false);
    setSizeSelected(false);
    setSelectedSku('');
  }, [sku]);

  // Get Available Sizes

  const selectedSizes = Object.keys(sku).map((item) => {
    if (sku[item].quantity !== 0) {
      return (<option key={item} value={item}>{sku[item].size}</option>);
    }
  });

  const cartSubmit = (event) => {
    event.preventDefault();
    if (currentSize && checkoutQuantity) {
      const checkoutItems = { sku_id: selectedSku };
      const count = Number(checkoutQuantity);
      for (let i = 0; i < count; i += 1) {
        axios
          .post('/cart', checkoutItems)
          .then((res) => {
            console.log('posted', res.data);
          })
          .catch((err) => {
            console.log('error client side post', err);
          });
      }
    }
    setCartClicked(true);
  };

  // Size On Change - stores Size in currentSize state for Submit
  const sizeValue = (event) => {
    if (event.target.value !== 'Select Size') {
      setSize(sku[event.target.value].size);
      setSelectedSku(event.target.value);
      setSizeQuantity(sku[event.target.value].quantity);
      setSizeSelected(true);
    } else {
      setSizeSelected(false);
      setSize('');
      setCartClicked(false);
      setSizeQuantity(0);
      setSizeSelected(false);
    }
  };
  // Get quantity for checkout
  const cartQuantity = (event) => {
    setCheckoutQuantity(event.target.value);
  };

  // Get all Quantities for dropdown
  const selectedQuantity = [...Array(Math.min(sizeQuantity, 15)).keys()].map((x) => ++x)
    .map((item) => (
      <option key={item} value={item}>{item}</option>
    ));

  return (
    <>
      <div className="Cart-Container">
        {!sizeSelected && cartClicked ? (
          <span className="size-error">Please select size</span>
        ) : (<span className="size-error" />)}
        {checkQuant && (
        <form>
          <select size={cartClicked && !currentSize ? '8' : 0} className="Size-Options" name="size" label="select-size" onChange={sizeValue}>
            <option value="Select Size" defaultValue="Select Size">Select Size</option>
            {selectedSizes}
          </select>
        </form>
        )}
        {checkQuant && !currentSize && (
          <form>
            <select className="Quantity-Options" name="quantity" label="select-quantity" defaultValue="1" disabled>
              <option>-</option>
            </select>
          </form>
        )}
        {checkQuant && currentSize && (
          <form>
            <select className="Quantity-Options" name="quantity" label="select-quantity" defaultValue="1" onChange={cartQuantity}>
              {selectedQuantity}
            </select>
          </form>
        )}
        {!checkQuant && (
          <form>
            <select name="size" label="select-size" defaultValue="Select Size" disabled className="Size-Options">
              <option>OUT OF STOCK</option>
            </select>
          </form>
        )}
        {checkQuant && (
          <>
            <button className="add-to-cart" type="submit" onClick={cartSubmit}>Add To Bag</button>
            <button className="favorite-star" type="button" aria-label="favorite-star"><i className="far fa-star" /></button>
          </>
        )}
      </div>
    </>
  );
}

export default AddToCart;
