import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import menuReducer from './menuSlice';

const store = configureStore({
  reducer: {
    cartItems: cartReducer,
    menuItems: menuReducer,
  },
});

export default store;
