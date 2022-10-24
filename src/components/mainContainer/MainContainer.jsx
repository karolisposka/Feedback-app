import React from "react";
import * as S from "./MainContainer.styles";

const MainContainer = ({ children }) => {
  return (
    <S.Container>
      <S.Section>{children}</S.Section>
    </S.Container>
  );
};

export default MainContainer;
