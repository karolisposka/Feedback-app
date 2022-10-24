import React from "react";
import PropTypes from "prop-types";
import * as S from "./InfoBox.styles";

const InfoBox = ({ children, className }) => {
  return (
    <S.Container className={className}>
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Container>
  );
};

InfoBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoBox;
