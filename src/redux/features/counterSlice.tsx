import { createSlice } from "@reduxjs/toolkit";

//  *** slice store er sathe connectkorte hobe ***
// createSlice  => name, initialState, reducers ei 3ta parameter cay
// name => kon slice er part
// initialState => initial value
// reducer  1ta function. reducer er moddhe actual logic gula handle korte hobe.
const initialState = {count : 0};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state, action) => {
            state.count = state.count + 1;
        },
        decrement: (state, action) => {
            state.count = state.count - 1;
        }
    }
})

export const { increment,decrement } = counterSlice.actions; 
export default counterSlice.reducer;