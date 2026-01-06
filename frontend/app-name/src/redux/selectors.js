import { roles } from "./roles";

export const selectRole = (state) => state.auth.role;

export const selectIsAdmin = (state) => state.auth.role === 1;

export const selectIsStudent = (state) => state.auth.role === 2

export const selectIsTeacher = (state) => state.auth.role === 3;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
