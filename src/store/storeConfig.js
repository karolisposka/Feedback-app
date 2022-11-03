import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./combinedReducers";
import thunk from 'redux-thunk';
import api from './middleware/api';

export const store = configureStore({
    reducer: combinedReducers,
    middleware: [api, thunk],
})

