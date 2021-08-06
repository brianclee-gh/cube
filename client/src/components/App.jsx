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

// const Related = lazy(() => import('./related/Related.jsx'));
// const Review = lazy(() => import('./reviews/ReviewsAndRatings.jsx'));

function App() {
  return (
    <div>
      <Header />
      <ReviewsProvider>
        <ProductsProvider>
          <Main />
          <Related />
          {/* <QAProvider>
            <QA />
          </QAProvider> */}
          <Review />
        </ProductsProvider>
      </ReviewsProvider>
    </div>
  );
}

export default App;
