import { createSlice } from "@reduxjs/toolkit";
import { roles } from "./roles";

const initialState = {
  token: localStorage.getItem("token") || null,
  role: (localStorage.getItem("role")) || ROLES.STUDENT,
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role);
    },

    logout: (state) => {
      state.token = null;
      state.role = ROLES.STUDENT;

      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
  },
});

export const { setRole, logout } = roleSlice.actions;
export default roleSlice.reducer;
