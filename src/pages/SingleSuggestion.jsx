import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postComment } from "../store/slices/commentsSlice";
import { getSingleSuggestion } from "../store/slices/suggestionsSlice";
import { singleSuggestionMappedSelector } from "../store/selectors";
import { keySelector } from "../store/selectors";
import { getUsersInfo } from "../store/slices/usersSlice";
import { getComments } from "../store/slices/commentsSlice";
import { getReplies } from "../store/slices/repliesSlice";
import { getUpvotes } from "../store/slices/upvotesSlice";
import SingleSuggestionContainer from "../components/singleSuggestionContainer/SingleSuggestionContainer";
import SuggestionsList from "../components/suggestionsList/SuggestionsList";
import SingleSuggestionHeader from "../components/singleSuggestionHeader/SingleSuggestionHeader";
import CommentsList from "../components/commentsList/CommentsList";
import Loader from "../components/loader/Loader";
import AddComment from "../components/addCommentForm/AddComment";

const SingleSuggestion = () => {
  const dispatch = useDispatch();
  const key = useSelector(keySelector);
  const suggestion = useSelector(singleSuggestionMappedSelector);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleSuggestion(id));
    if (!suggestion) {
      dispatch(getUsersInfo());
      dispatch(getComments());
      dispatch(getReplies());
      dispatch(getUpvotes());
    }
  }, [id]);

  const handleSubmit = (data) => {
    dispatch(postComment({ ...data, suggestion_id: id }));
  };

  return (
    <SingleSuggestionContainer>
      <SingleSuggestionHeader />
      {suggestion ? (
        <>
          <SuggestionsList list={suggestion} />
          <CommentsList comments={suggestion[0].comments} />
        </>
      ) : (
        <Loader />
      )}
      {key && (
        <>
          <AddComment
            handleSubmit={(values) => {
              handleSubmit(values);
            }}
          />
        </>
      )}
    </SingleSuggestionContainer>
  );
};

export default SingleSuggestion;
