import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { suggestionMessageSelector, suggestionErrorSelector } from "../store/selectors";
import { addSuggestion } from "../store/slices/suggestionsSlice";
import FormContainer from "../components/formContainer/FormContainer";
import NewFeedbackForm from "../components/newFeedbackForm/NewFeedbackForm";
import BackBtn from "../components/backButton/BackBtn";

const NewFeedBack = () => {
  const dispatch = useDispatch();
  const message = useSelector(suggestionMessageSelector);
  const error = useSelector(suggestionErrorSelector);

  const handleAdd = (data) => {
    dispatch(addSuggestion(data));
  };

  return (
    <FormContainer>
      <BackBtn />
      <NewFeedbackForm
        handleSubmit={(values) => {
          handleAdd(values);
        }}
        error={error}
        message={message}
      />
    </FormContainer>
  );
};

export default NewFeedBack;
