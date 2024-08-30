import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';


const App = () => {
  return (
    <div className="app-container">
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
