import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const suggestionsSlice = createSlice({
    name:'suggestions',
    initialState:{
        suggestions: null,
        singleSuggestion: null,
        error: null,
        message: null,
        sort: null,
    },
    reducers: {
        suggestionsRequested: (state, action) =>{
            return {
                ...state,
                suggestions: null,
                error:null,
                message:null,
            }
        },
        singleSuggestionRequested: (state, action) =>{
            return {
                ...state,
                singleSuggestion: null,
            }
        },
        singleSuggestionRecieved: (state, action) => {
            return {
                ...state,
                singleSuggestion: action.payload,
            }
        },
        suggestionsRecieved: (state, action) => {
            return {
                ...state,
                suggestions: action.payload
            }
        },
        suggestionEditRequested: (state, action) => {
            return {
                ...state,
                error:null,
                message:null,
            }
        },
        suggestionEdited: (state, action) => {
            return {
                ...state,
                message: action.payload,
            }
        },
        suggestionAddRequested: (state, action) => {
            return {
                ...state,
                error:null,
                message:null,
            }
        },
        suggestionAdded: (state, action) => {
            return {
                ...state,
                error:null,
                message:action.payload,
            }
        },
        sortOptionSelected: (state, action) => {
            return {
                ...state,
                sort: action.payload
            }
        },
        suggestionDeleted: (state, action) => {
            return {
                ...state,
                error: null,
                message: action.payload,
            }
        },
        suggestionDeleteRequested: (state, action) => {
            return {
                ...state,
                error:null,
                message: null
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

export const getData = () => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: `v1/suggestions/get`,
            onStart: suggestionsRequested.type,
            onSuccess: suggestionsRecieved.type,
            onError: errorRecieved.type,
        })
    )
};


export const filterData = (category) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: `v1/suggestions/get/${category}`,
            onStart: suggestionsRequested.type,
            onSuccess: suggestionsRecieved.type,
            onError: errorRecieved.type,
        })
    )
};

export const editSuggestion = (data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: `v1/suggestions/edit`,
            method:'post',
            headers: {
                Authorization: `Bearer ${getState().user.key}`,
                "Content-Type": "application/json",
            },
            data: data,
            onStart: suggestionEditRequested.type,
            onSuccess: suggestionEdited.type,
            onError: errorRecieved.type,
        })
    )
};

export const addSuggestion = (data) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: `v1/suggestions/add`,
            method:'post',
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
            onStart: suggestionAddRequested.type,
            onSuccess: suggestionAdded.type,
            onError: errorRecieved.type,
        })
    )
};

export const deleteSuggestion = (id) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: `v1/suggestions/delete/${id}`,
            method:'delete',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getState().user.key}`,
            },
            onStart: suggestionDeleteRequested.type,
            onSuccess: suggestionDeleted.type,
            onError: errorRecieved.type,
        })
    )
};


export const getSingleSuggestion = (id) => (dispatch, getState) => {
    dispatch(
        apiCallBegan({
            url: `v1/suggestions/single/${id}`,
            onStart: singleSuggestionRequested.type,
            onSuccess: singleSuggestionRecieved.type,
            onError: errorRecieved.type,
        })
    ) 
};



export const {suggestionsRecieved, suggestionDeleted, suggestionDeleteRequested, sortOptionSelected, suggestionEditRequested, suggestionAddRequested, suggestionEdited, singleSuggestionRequested, singleSuggestionRecieved, errorRecieved, suggestionsRequested, suggestionAdded } = suggestionsSlice.actions;
export default suggestionsSlice.reducer;