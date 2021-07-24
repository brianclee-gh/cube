/* eslint-disable import/extensions */
import React from 'react';
import './App.css';

// import ProductsContextProvider from './state/ProductsContext.jsx';
// import { GlobalProvider } from './state/GlobalContext.jsx';
import { ProductsProvider } from './state/ProductsContext.jsx';
import { ReviewsProvider } from './state/ReviewsContext.jsx';

import Related from './related/Related.jsx';
import Review from './reviews/ReviewsAndRatings.jsx';
// import ReviewsAndRatings from './reviews/ReviewsAndRatings.jsx';

function App() {
  return (
    <div>
      <h1>Project Catwalk</h1>
      {/* <Overview /> */}
      {/* Related */}
      {/* QA */}
      {/* <ReviewsAndRatings /> */}
      <Review />
      {/* <ProductsProvider>
        <ReviewsProvider>
          <Related />
        </ReviewsProvider>
      </ProductsProvider> */}
    </div>
  );
}

export default App;
