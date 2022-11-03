import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const commentsSlice = createSlice({
    name:'comments',
    initialState:{
        comments: null,
        error: null,
        message: null,
    },
    reducers: {
        commentAdded: (state,action) =>{
            const newComments = state.comments.concat(action.payload)
            return {
                ...state,
                comments: newComments,
            }
        },
        commentsRecieved: (state, action) => {
            return {
                ...state,
                comments: action.payload,
            }
        },
        errorRecieved: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        }
    }
})

export const postComment = (data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: `v1/comments/add`,
            method:'post',
            headers: {
                Authorization: `Bearer ${getState().user.key}`,
                "Content-Type": "application/json",
            },
            data: {...data},
            onSuccess: commentAdded.type,
            onError: errorRecieved.type,
        })
    )
};

export const getComments = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: `v1/comments/get`,
            onSuccess: commentsRecieved.type,
            onError: errorRecieved.type,
        })
    )
};



export const {commentAdded, errorRecieved, commentsRecieved} = commentsSlice.actions;
export default commentsSlice.reducer;