/* eslint-disable import/extensions */
import React from 'react';
import './App.css';

import { ProductsProvider } from './state/ProductsContext.jsx';
import { ReviewsProvider } from './state/ReviewsContext.jsx';

import Header from './header/Header.jsx';
import Main from './Overview/Main/Main.jsx';
import Related from './related/Related.jsx';
import Review from './reviews/ReviewsAndRatings.jsx';

function App() {
  return (
    <div>
      <Header />
<<<<<<< HEAD
      <ProductsProvider>
        <ReviewsProvider>
          <Main />
        </ReviewsProvider>
      </ProductsProvider>
      {/* <Overview /> */}
      {/* Related */}
      {/* QA */}
      {/* <ProductsProvider> */}
        {/* <ReviewsProvider> */}
        {/* <Related /> */}

        {/* </ReviewsProvider> */}
      {/* </ProductsProvider>
=======
>>>>>>> main
      <ReviewsProvider>
        <ProductsProvider>
          {/* <Main /> */}
          <Related />
          {/* <Review /> */}
        </ProductsProvider>
<<<<<<< HEAD
      </ReviewsProvider> */}

=======
      </ReviewsProvider>
>>>>>>> main
    </div>
  );
}

export default App;
