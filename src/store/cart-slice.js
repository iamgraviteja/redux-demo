import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartCount: 0,
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { price, id } = action.payload;
      // console.log(id);
      let existing = state.items.find((item) => item.id ===id);
      if (!existing) {
        state.items.push({
          ...action.payload,
          itemTotal: price,
          count: 1,
        });
      } else {
        existing.itemTotal += existing.price;
        existing.count++;
      }
      state.cartCount++;
    },
    removeItem: (state, action) => {
      let item = state.items.find((item) => (item.id === action.payload.id));
      console.log('item',item);
      if (item.count === 1) {
        state.items = state.items.filter((i) => i.id !== item.id);
      } else {
        item.count--;
        item.itemTotal -= item.price;
      }
      state.cartCount--;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice;
