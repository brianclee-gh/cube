import React, { useState } from "react";
import './App.css';

function App() {

    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(0)

    // GET request to put all products into products state on Mount


    return (<div>
        <h1>Project Catwalk</h1>
        <h3>Components Here</h3>
        {/* <Overview products={products} /> */}
    </div>)
}

export default App