import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: { token: null },
  reducers: {
    verifyUser(state, action) {
      const token = action.payload;
      state.token = token;
    },
    Logout(state, action) {
      state.token = null;
    },
  },
});

export const authActions = auth.actions;
