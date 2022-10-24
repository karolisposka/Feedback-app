import React from "react";
import * as S from "./Empty.styles";
import image from "../../assets/suggestions/illustration-empty.svg";

const Empty = () => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.Image src={image} />
        <S.Title>There is no feedback yet.</S.Title>
        <S.Content>
          Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
        </S.Content>
        <S.StyledButton to="/new">+ Add Feedback </S.StyledButton>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Empty;
