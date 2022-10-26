import { combineReducers } from "@reduxjs/toolkit";
import SuggestionsReducer from '../store/slices/suggestionsSlice';


export default combineReducers({
    suggestions: SuggestionsReducer,
})