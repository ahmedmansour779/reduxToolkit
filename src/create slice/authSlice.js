import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: true },
    reducers: {
        logIn: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
        toggleLog: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        }
    },
})

export default authSlice.reducer;
export const { logIn, logout, toggleLog } = authSlice.actions;