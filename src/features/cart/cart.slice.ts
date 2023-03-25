import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
  products: Product[];
  totalItems: number;
  totalCost: number;
  isLoading: boolean;
}

const initialState: CartState = {
  products: [],
  totalCost: 0,
  totalItems: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
