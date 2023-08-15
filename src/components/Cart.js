import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { removeItemFromCart } from '../store/cartSlice'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

function Cart() {
  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  const [showAllItems, setShowAllItems] = useState(false);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // تحديث السعر النهائي

  const visibleCartItems = showAllItems ? cartItems : cartItems.slice(0, 3);

  const handleRemoveItemClick = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
  
    if (item) {
      dispatch(removeItemFromCart(itemId)); // حذف المنتج
      toast.warning('Item removed from cart'); // إظهار إشعار حذف العنصر
    }
  };

  
  return (
    <div className="cart">
      <div className="cart-header">
        <h2 className="cart-title">Cart</h2>
        <button
          onClick={() => setShowAllItems(!showAllItems)}
          className={cartItems.length > 3 ? 'show-more-button' : ''}
        >
          {showAllItems ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className="cart-items">
        {visibleCartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">${item.price * item.quantity}</p> {}
              <div className="cart-item-controls">
                <button   className="remove-button" onClick={() => handleRemoveItemClick(item.id)}>    <FontAwesomeIcon icon={faTrash} /></button> {}
                <p className="cart-item-quantity">Quantity: {item.quantity}</p> {}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <p>Total Price:</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
}

export default Cart;
