/* eslint-disable import/extensions */
import React from 'react';
import './App.css';

import { ProductsProvider } from './state/ProductsContext.jsx';
import { ReviewsProvider } from './state/ReviewsContext.jsx';

import Header from './header/Header.jsx';
import Main from './Overview/Main/Main.jsx';
import Related from './related/Related.jsx';
import Review from './reviews/ReviewsAndRatings.jsx';

import QA from './q&a/QAOverview.jsx';
// import Q&A component

function App() {
  return (
    <div>
      <Header />
      <ReviewsProvider>
        <ProductsProvider>
          <Main />
<<<<<<< HEAD
          <Related />
<<<<<<< HEAD
        </ReviewsProvider>
      </ProductsProvider>
      <QA />
=======
          <Review />
=======
          {/* <Related /> */}
          {/* <Review /> */}
>>>>>>> 4fa7b67eaf4b35dc736c883b209ca3c21cea98ea
        </ProductsProvider>
      </ReviewsProvider>
>>>>>>> main
    </div>
  );
}

export default App;
