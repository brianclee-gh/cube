/* eslint-disable import/extensions */
import React, { lazy, Suspense } from 'react';

import { ProductsProvider } from './state/ProductsContext.jsx';
import { ReviewsProvider } from './state/ReviewsContext.jsx';
import { QAProvider } from './state/QAContext.jsx';
import { OverviewProvider } from './state/OverviewContext.jsx';
import Related from './related/Related.jsx';
import Header from './header/Header.jsx';
import Main from './Overview/Main/Main.jsx';
import Review from './reviews/ReviewsAndRatings.jsx';
import QA from './q&a/QAList.jsx';

import './App.css';
// const Related = lazy(() => import('./related/Related.jsx'));
// const Review = lazy(() => import('./reviews/ReviewsAndRatings.jsx'));

function App() {
  return (
    <div className="AppBody">
      <Header />
      <ReviewsProvider>
        <ProductsProvider>
          <Main />
<<<<<<< HEAD
          {/* <Related />
          <QAProvider>
            <QA />
          </QAProvider>
          <Review /> */}
=======
          <Related />
          <QAProvider>
            <QA />
          </QAProvider>
          <Review />
>>>>>>> 834ce1a4bc011172c772e3c5f5b9fa1cb71d88ee
        </ProductsProvider>
      </ReviewsProvider>
    </div>
  );
}

export default App;
