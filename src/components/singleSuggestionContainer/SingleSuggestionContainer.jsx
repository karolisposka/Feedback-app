import React from "react";
import PropTypes from "prop-types";
import * as S from "./SingleSuggestionContainer.styles";

const SingleSuggestionContainer = ({ children }) => {
  return (
    <S.Container>
      <S.Section>{children}</S.Section>
    </S.Container>
  );
};

SingleSuggestionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SingleSuggestionContainer;
