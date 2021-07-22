/* eslint-disable import/extensions */
import React from 'react';
import './App.css';

import Related from './related/Related.jsx';

function App() {
//   const [products, setProducts] = useState([]);
//   const [currentProduct, setCurrentProduct] = useState(0);

  // GET request to put all products into products state on Mount

  return (
    <div>
      <h1>Project Catwalk</h1>
      {/* <Overview products={products} /> */}
      <Related />
    </div>
  );
}

export default App;
