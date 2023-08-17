import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ showCart, setShowCart }) {
  const cartItems = useSelector(state => state.cartItems);
  const [showMenu, setShowMenu] = useState(false); // State for showing menu on small 
  const closeMobileMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="header">
      <h1>Yummy<span>.</span></h1>
      <nav className="nav">
        
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
       About
        </Link>
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
        
        <div className="nav-link cart__badge" onClick={() => setShowCart(!showCart)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart__badge">{cartItems.length}</span>
        </div>
        <div className="nav-link menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
      {showMenu && (
        <div className="mobile-menu open" onClick={closeMobileMenu}> 
        <div className="mobile-menu-nav">
        <Link to="/" className="mobile-menu-link">
            Home
          </Link>
          <hr className="mobile-menu-divider" />
          <Link to="/about" className="mobile-menu-link">
           About
          </Link>
          <hr className="mobile-menu-divider" />
          <Link to="/menu" className="mobile-menu-link">
            Menu
          </Link>
        </div>
        
        </div>
      )}
    </header>
  );
}

export default Header;
