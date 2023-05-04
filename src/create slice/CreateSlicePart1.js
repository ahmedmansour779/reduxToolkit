import { createSlice, createStore } from "@reduxjs/toolkit";

const initState = { value: 0, showCounter: false }

const counterSlice = createSlice({
    name: "counter",
    initialState: initState,
    reducers: {
        increase: (state, action) => {
            state.value = state.value + 1;
        },
        decrease: (state, action) => {
            state.value -= 1;
        }
    }
})

const store = createStore(counterSlice.reducer)

export default store