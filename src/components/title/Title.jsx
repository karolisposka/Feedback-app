import React from "react";
import * as S from "./Title.styles";
import PropTypes from "prop-types";

const Title = ({ children, className }) => {
  return <S.Title className={className}>{children}</S.Title>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
