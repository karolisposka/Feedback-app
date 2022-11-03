import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const upvotesSlice = createSlice({
    name:'upvotes',
    initialState:{
        upvotes: null,
        
    },
    reducers: {
        upvoteRequested: (state, action) => {
            return {
                ...state,

            }
        },
        upvotesRecieved: (state, action) => {
            return {
                ...state,
                upvotes: action.payload,
            }
        },
        upvoteIncremented: (state, action) => {
            const newUpvotes = state.upvotes.concat(action.payload);
            return {
                ...state,
                upvotes: newUpvotes,
            }
        },
    }
})

export const getUpvotes = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: `v1/upvotes/get`,
            onSuccess: upvotesRecieved.type,
        })
    )
}

export const upvote = (id) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: `v1/upvotes/add`,
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            data: {id},
            onStart: upvoteRequested.type,
            onSuccess: upvoteIncremented.type,
    
        })
    )
};


export const {
    upvoteIncremented,
    upvoteRequested,
    upvotesRecieved,
} = upvotesSlice.actions;


export default upvotesSlice.reducer;