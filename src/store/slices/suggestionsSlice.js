import { createSlice } from "@reduxjs/toolkit";

const suggestionsSlice = createSlice({
    name:'suggestions',
    initialState:{
        suggestions: null,
        error: null,
        message: null,
    },
    reducers: {
        suggestionsRecieved: (state, action) =>{
            return {
                ...state,
                suggestions: action.payload,
                error: null,
                message: null,
            }
        },
        suggestionDeleted: (state, action) => {
            return {
                ...state,
                suggestions: state.suggestions.filter(item => item.id === action.payload),
            }
        },
        suggestionAdded: (state, action) => {
            return {
                ...state, 
                error: null,
                message: action.payload,
            }
        },
        upvoteIncremented: (state, action) => {
            return {
                ...state,
                suggestions: state.suggestions.map(item => {
                    if (item.id === Number(action.payload)) {
                        return { ...item, upvotes: item.upvotes + 1,}
                    }
                    return item
                })
            }

        },
        sortedByLowestUpvotes:(state, action) =>{
            return {
                ...state,
                suggestions: state.suggestions.slice().sort((a,b) => a.upvotes - b.upvotes)
            }
        },

        sortedByHighestUpvotes :(state, action) =>{
            return {
                ...state,
                suggestions: state.suggestions.slice().sort((a,b) => b.upvotes - a.upvotes)
            }
        },
        sortedByLowestComments:(state, action) =>{
            return {
                ...state,
                suggestions: state.suggestions.slice().sort((a,b) => a.comments - b.comments)
            }
        },
        
        sortedByHighestComments :(state, action) =>{
            return {
                ...state,
                suggestions: state.suggestions.slice().sort((a,b) => b.comments - a.comments)
            }
        },
        errorRecieved: (state, action) => {
            return {
                ...state,
                suggestions: [],
                error: action.payload,
                message:null,
            }
        },
    }
})

export const {suggestionsRecieved, suggestionDeleted, errorRecieved, upvoteIncremented, suggestionAdded, sortedByLowestUpvotes, sortedByHighestUpvotes, sortedByLowestComments, sortedByHighestComments} = suggestionsSlice.actions;
export default suggestionsSlice.reducer;