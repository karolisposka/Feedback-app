import React from "react";
import * as S from "./SingleSuggestionHeader.styles";
const SingleSuggestionHeader = () => {
  return (
    <S.Header>
      <S.Back />
      <S.EditButton to="/edit">Edit Feedback</S.EditButton>
    </S.Header>
  );
};

export default SingleSuggestionHeader;
