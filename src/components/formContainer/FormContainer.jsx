import React from "react";
import PropTypes from "prop-types";
import * as S from "./FormContainer.styles";

const FormContainer = ({ children }) => {
  return (
    <S.Container>
      <S.Section>{children}</S.Section>
    </S.Container>
  );
};

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormContainer;
