import { createSlice } from "@reduxjs/toolkit";

const suggestionsSlice = createSlice({
    name:'suggestions',
    initialState:{
        suggestions: null,
        error: null,
    },
    reducers: {
        suggestionsRecieved: (state, action) =>{
            return {
                ...state,
                suggestions: action.payload,
                error: null,
            }
        },
        suggestionDeleted: (state, action) => {
            return {
                ...state,
                suggestions: state.suggestions.filter(item => item.id === action.payload),
            }
        },
        errorRecieved: (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
    }
})

export const {suggestionsRecieved, suggestionDeleted, errorRecieved} = suggestionsSlice.actions;
export default suggestionsSlice.reducer;