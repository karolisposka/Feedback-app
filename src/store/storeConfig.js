import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./combinedReducers";

console.log(combinedReducers);

export const store = configureStore({
    reducer: combinedReducers,
})

