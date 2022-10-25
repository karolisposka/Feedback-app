import React from "react";
import * as S from "./BackBtn.styles";

const BackBtn = ({ className }) => {
  return (
    <S.BtnContainer className={className}>
      <S.Arrow />
      <S.StyledLink className={className} to="/">
        Go Back
      </S.StyledLink>
    </S.BtnContainer>
  );
};

export default BackBtn;
