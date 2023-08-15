import React from 'react';
import './App.css';
import RestaurantInfo from './components/RestaurantInfo';
import MenuItems from './components/MenuItems';
import Cart from './components/Cart';

function App() {

    return (
      <div className="container">
        <div className="left-section">
          <RestaurantInfo      name="Fast Food Restaurant"
          description="Welcome to our Fast Food Restaurant!"/>
          <MenuItems />
        </div>
        <div className="right-section">
          <Cart />
        </div>
      </div>
    );
 
}

export default App;
