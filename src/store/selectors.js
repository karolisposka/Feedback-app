import { createSelector } from "@reduxjs/toolkit";

export const suggestionsSelector = (state) => state.suggestions.suggestions;
export const usersInfo = (state) => state.users.users;
export const commentsSelector = (state) => state.comments.comments;
export const repliesSelector = (state) => state.replies.replies;
export const upvotesSelector = (state) => state.upvotes.upvotes;
export const singleSuggestionSelector = (state) => state.suggestions.singleSuggestion;
export const userSelector = (state) => state.user;
export const keySelector = (state) => state.user.key;
export const sortSelector = (state) => state.suggestions.sort;
export const suggestionMessageSelector = (state) => state.suggestions.message;
export const suggestionErrorSelector = (state) => state.suggestions.error;


export const mappedSuggestionsSelector = createSelector(
    [suggestionsSelector, commentsSelector, upvotesSelector, sortSelector],
    (suggestions, comments, upvotes) => {
      return suggestions?.map(item => {
        return {
            ...item,
            comments: comments?.filter(com => com.suggestion_id === item.id).length,
            upvotes: upvotes?.filter(vote => vote.suggestion_id === item.id).length,
        }
      })
    }
)

export const sortedSuggestionsSelector = createSelector([mappedSuggestionsSelector, sortSelector], (suggestions, sort) => {
    switch (sort) {
            case "least":
              return suggestions?.sort((a, b) => a.upvotes - b.upvotes);
            case "most":
              return suggestions?.sort((a, b) => b.upvotes - a.upvotes);
            case "leastCom":
              return suggestions?.sort((a, b) => a.comments - b.comments);
            case "mostCom":
              return suggestions?.sort((a, b) => b.comments - a.comments);
            default: 
            return suggestions
          }
})

export const singleSuggestionMappedSelector = createSelector(
    [usersInfo, singleSuggestionSelector, repliesSelector, commentsSelector, upvotesSelector], (users, suggestion, replies, comments, upvotes) => {
        return suggestion?.map(item => {
            return {
                ...item,
                upvotes: upvotes?.filter(upvote => upvote.suggestion_id === item.id).length ?? 0,
                comments: comments?.filter(comment => comment.suggestion_id === item.id).map(com => {
                    return {
                        ...com,
                        user: users?.filter(user =>  Number(user.id) === Number(com.user_id)),
                        replies: replies?.filter(reply => reply.comment_id === com.id).map(rep =>{
                            return {
                                ...rep,
                                user: users?.filter(user => Number(user.id) === Number(rep.user_id)),
                            }
                        })
                    }
                })
            }
        })
        
    }
)