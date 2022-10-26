import React from "react";
import AddFeedbackContainer from "../components/addFeedbackContainer/AddFeedbackContainer";
import BackBtn from "../components/backButton/BackBtn";
import EditSuggestionForm from "../components/EditSuggestionForm/EditSuggestionForm";

const EditFeedBack = () => {
  return (
    <AddFeedbackContainer>
      <BackBtn />
      <EditSuggestionForm />
    </AddFeedbackContainer>
  );
};

export default EditFeedBack;
