import React from "react";
import PropTypes from "prop-types";
import * as S from "./CategoryItem.styles";

const CategoryItem = ({ to, text }) => {
  return <S.Link to={to}>{text}</S.Link>;
};

CategoryItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CategoryItem;
