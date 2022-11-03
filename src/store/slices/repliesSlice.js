import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const repliesSlice = createSlice({
    name:'replies',
    initialState:{
        replies: null,
        status: 'none',
        error: null,
    },
    reducers: {
        replyAddRequested: (state, action) =>{
            return {
                ...state,
                status: 'requested',
        
            }
        },
        replyAdded: (state, action) =>{
            const newReply = state.replies.concat(action.payload)
            return {
                ...state,
                status: 'recieved',
                replies: newReply,
            }
        },
        repliesRecieved: (state, action) => {
            return {
                ...state,
                status: 'recieved',
                replies: action.payload,
            }
        },
        errorRecieved: (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        }
       
    }
})

export const getReplies = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: `v1/replies/get`,
            method: 'get',
            onStart: replyAddRequested.type,
            onSuccess: repliesRecieved.type,
            onError: errorRecieved.type,
        })
    )
};

export const addReply = (data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: `v1/replies/add/`,
            method: 'POST',
            headers: {
                Authorization: `Bearer ${getState().user.key}`,
                "Content-Type": "application/json",
            },
            data: {...data},
            onStart: replyAddRequested.type,
            onSuccess: replyAdded.type,
            onError: errorRecieved.type,
        })
    )
};

export const {replyAdded, replyAddRequested, errorRecieved, repliesRecieved} = repliesSlice.actions;
export default repliesSlice.reducer;