import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleSuggestionContainer from "../components/singleSuggestionContainer/SingleSuggestionContainer";
import SuggestionsList from "../components/suggestionsList/SuggestionsList";
import SingleSuggestionHeader from "../components/singleSuggestionHeader/SingleSuggestionHeader";
import CommentsList from "../components/commentsList/CommentsList";
import Loader from "../components/loader/Loader";
import AddComment from "../components/addCommentForm/AddComment";

const SingleSuggestion = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const getData = async (id) => {
    try {
      const res = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: `/v1/suggestions/single/${id}`,
        method: "get",
      });
      if (res.data.data) {
        setData(res.data.data);
      } else {
        console.log("something wrong with the server. Please try again later");
      }
    } catch (err) {
      console.log("Something is wrong with the server. Cannot get data");
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <SingleSuggestionContainer>
      <SingleSuggestionHeader />
      {data ? (
        <>
          <SuggestionsList list={data} />
          <CommentsList comments={data} />
        </>
      ) : (
        <Loader />
      )}
      <AddComment
        handleSubmit={(values) => {
          handleSubmit(values);
        }}
      />
    </SingleSuggestionContainer>
  );
};

export default SingleSuggestion;
