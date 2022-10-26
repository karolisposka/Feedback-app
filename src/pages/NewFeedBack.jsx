import React from "react";
import BackBtn from "../components/backButton/BackBtn";
import AddFeedbackContainer from "../components/addFeedbackContainer/AddFeedbackContainer";
import NewFeedbackForm from "../components/newFeedbackForm/NewFeedbackForm";

const NewFeedBack = () => {
  return (
    <AddFeedbackContainer>
      <BackBtn />
      <NewFeedbackForm />
    </AddFeedbackContainer>
  );
};

export default NewFeedBack;
