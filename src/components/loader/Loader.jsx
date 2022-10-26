import React from "react";
import * as S from "./Loader.styles";

const Loader = () => {
  return (
    <S.Container>
      <S.Loader>
        <S.LoaderElement />
        <S.LoaderElement />
      </S.Loader>
    </S.Container>
  );
};

export default Loader;
