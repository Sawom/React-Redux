import { createSlice } from "@reduxjs/toolkit";

// createSlice  => name, initialState, reducers ei 3ta parameter cay
// name => kon slice er part
// initialState => initial value
// reducer er moddhe actual logic gula handle korte hobe.
const initialState = {count : 0};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{

    }
})
