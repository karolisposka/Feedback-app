import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const usersSlice = createSlice({
    name:'suggestions',
    initialState:{
        users: null,
        error: null,
    },
    reducers: {
        errorRecieved: (state, action) =>{
            return {
                ...state,
                message:null,
                error: action.payload,
            }
        },
        usersInfoRecieved: (state, action) => {
            return {
                ...state,
                users: action.payload,
            }
        }
       
        
       
    }
})

export const getUsersInfo = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: 'v1/users/get',
            onSuccess: usersInfoRecieved.type,
        })
    )
}

export const {errorRecieved, usersInfoRecieved} = usersSlice.actions;
export default usersSlice.reducer;