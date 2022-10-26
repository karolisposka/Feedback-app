import React from "react";
import PropTypes from "prop-types";
import * as S from "./AddFeedbackContainer.styles";

const AddFeedbackContainer = ({ children }) => {
  return (
    <S.Container>
      <S.Section>{children}</S.Section>
    </S.Container>
  );
};

AddFeedbackContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AddFeedbackContainer;
