import { createSlice, configureStore } from "@reduxjs/toolkit";
import { auth } from "./Auth";

const init = { cart: [], total: 0, totalAmount: 0 };

const course = createSlice({
  name: "courses",
  initialState: init,
  reducers: {
    addToCart(state, action) {
      const data = action.payload;
      const existingitem = state.cart.find((item) => item.id === data.id);
      if (!existingitem) {
        state.cart.push({
          id: data.id,
          coursename: data.name,
          price: data.price,
          quantity: 1,
          totalprice: data.price,
        });
        state.total++;
        state.totalAmount = state.totalAmount + data.price;
      } else {
        existingitem.quantity++;

        state.totalAmount = state.totalAmount + data.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload.id;

      if (id) {
        state.cart = state.cart.filter((cartInfo) => cartInfo.id !== id);
        state.total--;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    courses: course.reducer,
    Auth: auth.reducer,
  },
});

export default store;
export const CartActions = course.actions;
