import React from "react";
import BackBtn from "../components/backButton/BackBtn";
import axios from "axios";
import { useDispatch } from "react-redux";
import { suggestionAdded } from "../store/slices/suggestionsSlice";
import AddFeedbackContainer from "../components/addFeedbackContainer/AddFeedbackContainer";
import NewFeedbackForm from "../components/newFeedbackForm/NewFeedbackForm";

const NewFeedBack = () => {
  const dispatch = useDispatch();
  const postNewFeedback = async (values) => {
    console.log(values);
    try {
      const res = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: "v1/suggestions/add",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { ...values },
      });
      if (res.data.msg) {
        dispatch(suggestionAdded(res.data.msg));
      }
    } catch (err) {
      console.log(err);
      console.log("error occured. Something wrong with feedback post");
    }
  };

  return (
    <AddFeedbackContainer>
      <BackBtn />
      <NewFeedbackForm
        handleSubmit={(values) => {
          postNewFeedback(values);
        }}
      />
    </AddFeedbackContainer>
  );
};

export default NewFeedBack;
