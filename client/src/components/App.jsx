/* eslint-disable import/extensions */
import React from 'react';
import './App.css';

// import ProductsContextProvider from './state/ProductsContext.jsx';
// import { GlobalProvider } from './state/GlobalContext.jsx';
import { ProductsProvider } from './state/ProductsContext.jsx';
import { ReviewsProvider } from './state/ReviewsContext.jsx';

import Header from './header/Header.jsx';
import Related from './related/Related.jsx';
import Review from './reviews/ReviewsAndRatings.jsx';
// import ReviewsAndRatings from './reviews/ReviewsAndRatings.jsx';
import Main from './Overview/Main/Main.jsx';

function App() {
  return (
    <div>
      <Header />
      <ReviewsProvider>
        <ProductsProvider>
          <Main />
          <Related />
          <Review />
        </ProductsProvider>
      </ReviewsProvider>
    </div>
  );
}

export default App;
