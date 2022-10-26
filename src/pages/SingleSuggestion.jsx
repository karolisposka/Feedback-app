import React from "react";
import data from "../assets/data/data.json";
import { useParams } from "react-router-dom";
import SingleSuggestionContainer from "../components/singleSuggestionContainer/SingleSuggestionContainer";
import SuggestionsList from "../components/suggestionsList/SuggestionsList";
import SingleSuggestionHeader from "../components/singleSuggestionHeader/SingleSuggestionHeader";
import CommentsList from "../components/commentsList/CommentsList";
import AddComment from "../components/addCommentForm/AddComment";

const SingleSuggestion = () => {
  const { id } = useParams();
  const filteredData = data.productRequests.filter((item) => Number(item.id) === Number(id));

  return (
    <SingleSuggestionContainer>
      <SingleSuggestionHeader />
      <SuggestionsList list={filteredData} />
      <CommentsList comments={filteredData[0].comments} />
      <AddComment />
    </SingleSuggestionContainer>
  );
};

export default SingleSuggestion;
