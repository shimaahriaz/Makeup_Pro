import { createSlice } from "@reduxjs/toolkit";

const saveCartStateToLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.quantity,
              counter: action.payload.counter,
            };
          } else {
            return item;
          }
        });
        state.cart = updatedCart;
      } else {
        const newItem = {
          ...action.payload,
        };
        state.cart.push(newItem);
      }
      saveCartStateToLocalStorage(state.cart);
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.counter < 5) {
        item.counter++;
        saveCartStateToLocalStorage(state.cart);
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.counter > 1) {
        item.counter--;
        saveCartStateToLocalStorage(state.cart);
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
