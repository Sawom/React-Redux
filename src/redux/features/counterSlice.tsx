import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
//  *** slice store er sathe connectkorte hobe ***
// createSlice  => name, initialState, reducers ei 3ta parameter cay
// name => kon slice er part
// initialState => initial value
// reducer  1ta function. reducer er moddhe actual logic gula handle korte hobe.

type CounterType ={
    count: number;
}

const initialState = {count : 0};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.count = state.count + 1;
        },
        // payload
        incrementByValue: (state, action: PayloadAction<number>) => { // action type bole dilam
            state.count = state.count + action.payload;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        }
    }
})

export const { increment,decrement,incrementByValue } = counterSlice.actions; 
export default counterSlice.reducer;