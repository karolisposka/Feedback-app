import React from "react";
import * as S from "./SingleSuggestionHeader.styles";
import { useNavigate, useLocation } from "react-router-dom";
const SingleSuggestionHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <S.Header>
      <S.Back />
      <S.EditButton
        handleClick={() => {
          navigate("/edit", { state: location.pathname });
        }}
      >
        Edit Feedback
      </S.EditButton>
    </S.Header>
  );
};

export default SingleSuggestionHeader;
