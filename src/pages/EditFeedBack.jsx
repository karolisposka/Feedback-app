import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { singleSuggestionMappedSelector, suggestionErrorSelector, suggestionMessageSelector } from "../store/selectors";
import { editSuggestion, deleteSuggestion } from "../store/slices/suggestionsSlice";
import EditSuggestionForm from "../components/EditSuggestionForm/EditSuggestionForm";
import FormContainer from "../components/formContainer/FormContainer";
import BackBtn from "../components/backButton/BackBtn";
import Loader from "../components/loader/Loader";

const EditFeedBack = () => {
  //id is used to define from which single suggestion page user came from
  let id;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const data = useSelector(singleSuggestionMappedSelector);
  const message = useSelector(suggestionMessageSelector);
  const error = useSelector(suggestionErrorSelector);

  useEffect(() => {
    if (location.state) {
      id = location.state.slice(12);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <FormContainer>
      <BackBtn />
      {data ? (
        <EditSuggestionForm
          suggestionTitle={data[0].title}
          category={data[0].category}
          stat={data[0].status}
          description={data[0].description}
          handleSubmit={(values) => {
            dispatch(editSuggestion({ ...values, id }));
          }}
          handleDelete={() => {
            dispatch(deleteSuggestion(id));
          }}
          error={error}
          message={message}
        />
      ) : (
        <Loader />
      )}
    </FormContainer>
  );
};

export default EditFeedBack;
