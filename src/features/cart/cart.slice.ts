import { createSlice } from '@reduxjs/toolkit';

type CartItem = Product & {
  quantity: number;
};

export interface CartState {
  cartItems: CartItem[];
  totalItems: number;
  totalCost: number;
  isLoading: boolean;
}

const initialState: CartState = {
  cartItems: [],
  totalCost: 0,
  totalItems: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const isItemExist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (isItemExist) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
        state.totalItems += 1;
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
