/* eslint-disable import/extensions */
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import Related from './related/Related.jsx';
// import ReviewsAndRatings from './reviews/ReviewsAndRatings.jsx';

function App() {
  const [products, setProducts] = useState([]);
  //  const [currentProduct, setCurrentProduct] = useState(0);

  const getProducts = () => {
    axios.get('/products')
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // GET request to put all products into products state on Mount

  return (
    <div>
      <h1>Project Catwalk</h1>
      {/* <Overview /> */}
      <button type="button" onClick={getProducts}>Click Me</button>
      <Related />
      {/* <ReviewsAndRatings /> */}
    </div>
  );
}

export default App;
