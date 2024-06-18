import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
        const item = action.payload;
        const existingItem = state.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity if the item already exists
        } else {
            state.push({ ...item, quantity: +1 }); // Add new item with quantity 1
        }
    },
    deleteFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
        if (item.quantity <= 0) {
          return state.filter(item => item.id !== action.payload.id);
        }
      }
    },
  },
});

export const { addToCart, deleteFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;