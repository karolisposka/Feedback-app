import React from "react";
import PropTypes from "prop-types";
import * as S from "./CategoryItem.styles";

const CategoryItem = ({ to, text, className }) => {
  return (
    <S.Link to={to} className={className}>
      {text}
    </S.Link>
  );
};

CategoryItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CategoryItem;
