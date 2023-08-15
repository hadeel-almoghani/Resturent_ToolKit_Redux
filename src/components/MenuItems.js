import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuItems } from '../store/menuSlice';

import { addToCart } from '../store/cartSlice';
import './MenuItems.css';

function MenuItems() {
 const menuItems = useSelector(state => state.menuItems);

  const dispatch = useDispatch();
  

  useEffect(() => {
    fetch('/menuData.json')
      .then(response => response.json())
      .then(data => dispatch(setMenuItems(data)));
  }, [dispatch]);

  
  return (
    <div className="menu-container">
      {menuItems.map(item => (
        <div className="menu-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="menu-item-details">
            <p className="menu-item-name">{item.name}</p>
            <p className="menu-item-price">{item.price} $ </p>
            
        </div>
        <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
          </div>
      ))}
    </div>
  );
}

export default MenuItems;
