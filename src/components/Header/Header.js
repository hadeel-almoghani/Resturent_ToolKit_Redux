import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header({ showCart, setShowCart }) {
  const cartItems = useSelector(state => state.cartItems);

  return (
    <header className="header">
      <div className="logo">Fast Food Restaurant</div>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
        <div className="nav-link cart__badge" onClick={() => setShowCart(!showCart)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart__badge">{cartItems.length}</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
