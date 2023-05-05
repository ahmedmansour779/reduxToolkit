import { createSlice, createStore } from '@reduxjs/toolkit';

const initState = { value: 10 }



const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        increase: (state, action) => {
            state.value += action.payload;
        },
        decrease: (state, action) => {
            // eslint-disable-next-line no-cond-assign
            if (state.value > 0) {
                state.value -= 1
            }
        }
    }
})

const store = createStore(counterSlice.reducer)
export const { increase, decrease } = counterSlice.actions;

export default store