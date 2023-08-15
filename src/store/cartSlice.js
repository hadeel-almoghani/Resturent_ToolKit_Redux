import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementCartItem: (state, action) => {
      const { id } = action.payload;
      const item = state.find(item => item.id === id);
      
      if (item) {
        item.quantity++; 
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      return state.map(item => {
        if (item.id === itemIdToRemove) {
          if (item.quantity === 1) {
            return undefined; 
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      }).filter(item => item !== undefined); 
    },
    
  },
});

export const { addToCart, incrementCartItem, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
