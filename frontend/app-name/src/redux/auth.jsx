import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    userid: localStorage.getItem("userId") || null,
    role: localStorage.getItem("role")
      ? Number(localStorage.getItem("role"))
      : null,
    isLoggedIn: !!localStorage.getItem("token"),
  },

  reducers: {
    login: (state, action) => {
      const { token, role, userId } = action.payload;

      state.token = token;
      state.role = Number(role);
      state.userid = userId;
      state.isLoggedIn = true;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", userId);
    },
     setUserId: (state, action) => {
      state.userid = action.payload,
      localStorage.setItem("userId",action.payload)
    },

    logout: (state) => {
      state.token = null;
      state.userid = null;
      state.role = null;
      state.isLoggedIn = false;
      localStorage.clear();
    },
  },
});

export const { login, logout,setUserId } = authSlice.actions;
export default authSlice.reducer;
