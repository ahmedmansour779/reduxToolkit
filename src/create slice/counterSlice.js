import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authSlice';

const initState = { value: 10 }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        increase: (state, action) => {
            state.value += action.payload;      //? to make props in dispatch methods
        },
        decrease: (state, action) => {
            state.value > 0 ? state.value -= 1 : state = state.value
        }
    },
    //! this old way
    // extraReducers: {
    //     [logout]: (state, action) => {
    //         console.log("test");
    //         state.value = action.payload
    //     },
    // },
    //! this new way
    extraReducers: (builder) => {
        builder.addCase(logout, (state, action) => {
            state.value = action.payload
        },)
    }
})

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;