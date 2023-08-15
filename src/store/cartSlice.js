import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity++; // زيادة العدد
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementCartItem: (state, action) => {
      const { id } = action.payload;
      const item = state.find(item => item.id === id);
      
      if (item) {
        item.quantity++; // زيادة العدد
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      return state.map(item => {
        if (item.id === itemIdToRemove) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }; // تقليل العدد
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    },
  },
});

export const { addToCart, incrementCartItem, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
