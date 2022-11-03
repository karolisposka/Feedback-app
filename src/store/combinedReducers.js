import { combineReducers } from "@reduxjs/toolkit";
import SuggestionsReducer from '../store/slices/suggestionsSlice';
import userSlice from "./slices/userSlice";
import upvotesSlice from "./slices/upvotesSlice";
import commentsSlice from "./slices/commentsSlice";
import repliesSlice from "./slices/repliesSlice";
import usersSlice from "./slices/usersSlice";


export default combineReducers({
    suggestions: SuggestionsReducer,
    user: userSlice,
    users: usersSlice,
    upvotes: upvotesSlice,
    replies: repliesSlice,
    comments: commentsSlice
})