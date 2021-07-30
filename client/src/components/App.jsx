/* eslint-disable import/extensions */
import React, { lazy, Suspense } from 'react';
import './App.css';

import { ProductsProvider } from './state/ProductsContext.jsx';
import { ReviewsProvider } from './state/ReviewsContext.jsx';

import Header from './header/Header.jsx';
import Main from './Overview/Main/Main.jsx';
import Review from './reviews/ReviewsAndRatings.jsx';
import QA from './q&a/QAList.jsx';
import Related from './related/Related.jsx';
// const Related = lazy(() => import('./related/Related.jsx'));
// import Q&A component

function App() {
  // const renderLoader = () => <p>Loading</p>;
  return (
    <div>
      <Header />
      <ReviewsProvider>
        <ProductsProvider>
          <Main />
          {/* <Suspense fallback={renderLoader()}> */}
            <Related />
          {/* </Suspense> */}
          <Review />
        </ProductsProvider>
      </ReviewsProvider>
      <QA />
    </div>
  );
}

export default App;
