import React from "react";
import * as S from "./RoadMapHeader.styles";

const RoadMapHeader = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.BackButton />
        <S.Title>Roadmap</S.Title>
      </S.TitleWrapper>
      <S.AddFeedbackBtn to="/">+ Add Feedback</S.AddFeedbackBtn>
    </S.Container>
  );
};

export default RoadMapHeader;
