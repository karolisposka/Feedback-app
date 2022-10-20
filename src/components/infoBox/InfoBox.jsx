import React from "react";
import PropTypes from "prop-types";
import * as S from "./InfoBox.styles";

const InfoBox = ({ children }) => {
  return (
    <S.Container>
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Container>
  );
};

InfoBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoBox;
