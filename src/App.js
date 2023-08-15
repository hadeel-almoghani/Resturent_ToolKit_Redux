import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import RestaurantInfo from './components/RestaurantInfo';
import MenuItems from './components/MenuItems';
import Cart from './components/Cart';
import Header from './components/Header/Header';
import   { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const cartItems = useSelector(state => state.cartItems);
  const [showCart, setShowCart] = useState(false); 
  return (
    <Router> {/* Wrap your entire app with BrowserRouter */}

      <Header showCart={showCart} setShowCart={setShowCart}  />
      <div className="container">
   

        <div className="left-section">
          <RestaurantInfo name="Fast Food Restaurant" description="Welcome to our Fast Food Restaurant!" />
          <MenuItems />
        </div>
        <div className="right-section">
        {showCart && <Cart />}
        </div>
      </div>
    </Router>
  );
}

export default App;
