/* eslint-disable import/extensions */
import React from 'react';
import './App.css';

// import ProductsContextProvider from './state/ProductsContext.jsx';
// import { GlobalProvider } from './state/GlobalContext.jsx';
import { ProductsProvider } from './state/ProductsContext.jsx';
import { ReviewsProvider } from './state/ReviewsContext.jsx';

import Related from './related/Related.jsx';
// import ReviewsAndRatings from './reviews/ReviewsAndRatings.jsx';

import Main from './Overview/Main/Main.jsx';
// import OverView Component

import QA from './q&a/QAOverview.jsx';
// import Q&A component

function App() {
  return (
    <div>
      <h1>Project Catwalk</h1>
      <Main />
      {/* <Overview /> */}
      {/* Related */}
      {/* QA */}
      {/* <ReviewsAndRatings /> */}
      <ProductsProvider>
        <ReviewsProvider>
          <Related />
        </ReviewsProvider>
      </ProductsProvider>
      <QA />
    </div>
  );
}

export default App;
