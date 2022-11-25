import React from "react";
import * as S from "./Loader.styles";

const Loader = ({ className }) => {
  return (
    <S.Container className={className}>
      <S.Loader>
        <S.LoaderElement />
        <S.LoaderElement />
      </S.Loader>
    </S.Container>
  );
};

export default Loader;
