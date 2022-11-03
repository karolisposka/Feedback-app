import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, filterData } from "../../store/slices/suggestionsSlice";
import { getUpvotes } from "../../store/slices/upvotesSlice";
import { getReplies } from "../../store/slices/repliesSlice";
import { getComments } from "../../store/slices/commentsSlice";
import { useParams } from "react-router-dom";
import { sortedSuggestionsSelector } from "../../store/selectors";
import SuggestionsList from "../suggestionsList/SuggestionsList";
import Loader from "../loader/Loader";

const SuggestionsLayout = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const suggestions = useSelector(sortedSuggestionsSelector);

  useEffect(() => {
    if (category !== "all") {
      dispatch(filterData(category));
    } else {
      dispatch(getData());
      dispatch(getUpvotes());
      dispatch(getComments());
      dispatch(getReplies());
    }
  }, [category]);

  return <>{suggestions ? <SuggestionsList list={suggestions} /> : <Loader />}</>;
};

export default SuggestionsLayout;
