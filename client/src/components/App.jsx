/* eslint-disable import/extensions */
import React from 'react';
import './App.css';

// import ProductsContextProvider from './state/ProductsContext.jsx';
import { GlobalProvider } from './state/GlobalContext.jsx';

import Related from './related/Related.jsx';
// import ReviewsAndRatings from './reviews/ReviewsAndRatings.jsx';

function App() {
  return (
    <div>
      <h1>Project Catwalk</h1>
      {/* <Overview /> */}
      {/* Related */}
      {/* QA */}
      {/* <ReviewsAndRatings /> */}
      <GlobalProvider>
        <Related />
      </GlobalProvider>
    </div>
  );
}

export default App;
