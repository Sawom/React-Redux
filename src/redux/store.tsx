import { configureStore } from "@reduxjs/toolkit";
// counterReducer nam e counterSlice theke import korlam
import counterReducer from './features/counterSlice';

// 1ta reducer => 1ta state k handle kore
// prottekta action er jnno 1ta kore reducer thakbe.
// reducer e action define korbo
// reducer hisebe slice banabo. 
// slice bolte 1ta part, alada business logic handle kore. 1ta initial state set korte hobe.
export const store = configureStore({
  reducer: {
    counter : counterReducer
  },
});
