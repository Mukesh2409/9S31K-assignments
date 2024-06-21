import React, { useEffect, useState } from 'react';
import ProductList from './components/productlist';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace this URL with the actual URL of your API if needed
    fetch('https://fake-store-api.mock.beeceptor.com/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Product Listing</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
