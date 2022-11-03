import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'suggestions',
    initialState:{
        key: null,
        message: null,
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
        messageRecieved: (state, action) =>{
            return {
                ...state,
                error:null,
                message: action.payload,
            }
        },
        keyRecieved: (state, action) =>{
            return {
                ...state,
                key: action.payload,
                message: null,
                error:null,
            }
        }
       
    }
})

export const {errorRecieved, messageRecieved, keyRecieved} = userSlice.actions;
export default userSlice.reducer;