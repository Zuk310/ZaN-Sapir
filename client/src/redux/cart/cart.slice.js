import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity;
      state.products.push(action.payload);
      state.totalPrice +=
        action.payload.product.price * action.payload.quantity;
    },
    updateProductQuantity: (state, action) => {
      state.products.find(
        (productInState) => productInState.id === action.payload.id
      ).quantity = action.payload.quantity;

      state.products.find(
        (productInState) => productInState.id === action.payload.id
      ).price = action.payload.price;

      state.quantity = state.products.reduce(
        (acc, obj) => acc + obj.quantity,
        0
      );
      state.totalPrice = state.products.reduce(
        (acc, obj) => acc + obj.price,
        0
      );
    },
    updateAndDeleteProduct: (state, action) => {
      state.products.find(
        (productInState) => productInState.id === action.payload.id
      ).quantity = action.payload.quantity;

      state.products.find(
        (productInState) => productInState.id === action.payload.id
      ).price = action.payload.price;

      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );

      state.quantity = state.products.reduce(
        (acc, obj) => acc + obj.quantity,
        0
      );
      state.totalPrice = state.products.reduce(
        (acc, obj) => acc + obj.price,
        0
      );
    },
  },
});

export const { addProduct, updateProductQuantity, updateAndDeleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
