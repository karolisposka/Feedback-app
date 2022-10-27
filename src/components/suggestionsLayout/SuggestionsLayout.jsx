import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { errorRecieved, suggestionsRecieved } from "../../store/slices/suggestionsSlice";
import axios from "axios";
import { useParams } from "react-router-dom";
import { suggestionsSelector } from "../../store/selectors";
import SuggestionsList from "../suggestionsList/SuggestionsList";
import Loader from "../loader/Loader";

const SuggestionsLayout = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  const suggestions = useSelector(suggestionsSelector);

  const getSuggestions = async () => {
    try {
      const res = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: `v1/suggestions/get`,
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.data.data) {
        return dispatch(suggestionsRecieved(res.data.data));
      }
      if (res.data.err) {
        return dispatch(errorRecieved(res.response.data.err));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const filterData = async (category) => {
    try {
      const res = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: `v1/suggestions/get/${category}`,
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(res);
      if (res.data.data) {
        return dispatch(suggestionsRecieved(res.data.data));
      }
      if (res.data.err) {
        return dispatch(errorRecieved(res.response.data.err));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(category);
    if (category !== "all") {
      filterData(category);
    } else {
      getSuggestions();
    }
  }, [category]);

  return <>{suggestions ? <SuggestionsList list={suggestions} /> : <Loader />}</>;
};

export default SuggestionsLayout;
