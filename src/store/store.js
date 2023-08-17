import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import menuReducer from './menuSlice';
import testimonialsReducer from './testimonialsSlice';
const store = configureStore({
  reducer: {
    cartItems: cartReducer,
    menuItems: menuReducer,
    testimonials: testimonialsReducer,
  },
});

export default store;
