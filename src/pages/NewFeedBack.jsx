import React from "react";
import BackBtn from "../components/backButton/BackBtn";
import MainContainer from "../components/mainContainer/MainContainer";
import NewFeedbackForm from "../components/newFeedbackForm/NewFeedbackForm";

const NewFeedBack = () => {
  return (
    <MainContainer>
      <BackBtn />
      <NewFeedbackForm />
    </MainContainer>
  );
};

export default NewFeedBack;
