import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { removeItemFromCart } from "../store/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTimes, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const [isCartOpen, setIsCartOpen] = useState(true); // State for cart visibility
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const visibleCartItems = cartItems; // Show all cart items when open

  const handleRemoveItemClick = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);

    if (item) {
      dispatch(removeItemFromCart(itemId));
      toast.warning("Item removed from cart");
    }
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const cartItemsList = visibleCartItems.map((item) => (
    <div className="cart-item" key={item.id}>
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">
          ${item.price * item.quantity}
        </p>
        <div className="cart-item-controls">
          <button
            className="remove-button"
            onClick={() => handleRemoveItemClick(item.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <p className="cart-item-quantity">
            Quantity: {item.quantity}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={`card-container ${isCartOpen ? "" : "hidden"}`}>
      {isCartOpen && (
        <div className="cart">
          <div className="cart-header">
            <div className="cart__close" onClick={handleCartClose}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <h2 className="cart-title">Cart</h2>
          </div>
          <div className="cart-items">
            {cartItemsList}
          </div>
          <div className="total-price">
            <p>Total Price:</p>
            <p>${totalPrice}</p>
          </div>
        </div>
      )}
    
    </div>
  );
}

export default Cart;
