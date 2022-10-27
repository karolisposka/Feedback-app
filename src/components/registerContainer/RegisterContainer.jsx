import React from "react";
import PropTypes from "prop-types";
import * as S from "./RegisterContainer.styles";

const RegisterContainer = ({ children }) => {
  return (
    <S.Container>
      <S.Section>
        <S.Back />
        {children}
      </S.Section>
    </S.Container>
  );
};

RegisterContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RegisterContainer;
