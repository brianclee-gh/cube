import React, { useState, useEffect } from 'react';

function AddToCart({ sku }) {
  // quantity per size selected
  const [sizeQuantity, setSizeQuantity] = useState(0);
  // size selected in dropdown
  const [currentSize, setSize] = useState('');
  // tracking Sku for possible checkout
  const [selectedSku, setSelectedSku] = useState('');
  // quantity selected from dropdown for checkout
  const [checkoutQuantity, setCheckoutQuantity] = useState();

  // Check for no Quantity in any size
  const checkNoQuant = (skus) => {
    let total = 0;
    for (let key in skus) {
      total += skus[key].quantity;
    }
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
  useEffect(() => {
    setSize('');
    setCheckoutQuantity('');
  }, [sku]);

  // Get Available Sizes
  const selectedSizes = Object.keys(sku).map((item) => {
    if (sku[item].quantity !== 0) {
      return (<option key={item} value={item}>{sku[item].size}</option>);
    }
  });
  // Add to Cart Special Case- no Size Selected
  const [sizeSelected, setSizeSelected] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);

  // const cartSubmit = () => {
  //   // e.preventDefault();
  //   setCartClicked(true);
  // };
  // Size On Change - stores Size in currentSize state for Submit
  const sizeValue = (event) => {
    if (event.target.value !== 'Select Size') {
      setSize(sku[event.target.value].size);
      setSelectedSku(event.target.value);
      setSizeQuantity(sku[event.target.value].quantity);
      setSizeSelected(true);
    } else {
      setSizeSelected(false);
    }
  };
  // Get quantity for checkout
  const cartQuantity = (event) => {
    setCheckoutQuantity(event.target.value);
  };

  // Get all Quantities for dropdown
  const selectedQuantity = [...Array(Math.min(sizeQuantity, 15)).keys()].map((x) => ++x).map((item) => (
    <option key={item} value={item}>{item}</option>
  ));

  return (
    <>
      <div className="Cart-Container">
        {/* {!sizeSelected && cartClicked && (
          <span>Please select size</span>
        )} */}
        {checkQuant && (
        <form>
          <select className="Size-Options" name="size" label="select-size" onChange={sizeValue}>
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
        {checkQuant && (<button className="add-to-cart" type="submit">Add To Cart</button>)}
      </div>
    </>
  );
}

export default AddToCart;
