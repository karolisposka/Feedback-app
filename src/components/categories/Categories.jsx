import React from "react";
import * as S from "./Categories.styles";
import PropTypes from "prop-types";
import CategoryItem from "../categoryItem/CategoryItem";

const Categories = ({ categories }) => {
  return (
    <S.CategoriesList>
      {categories ? (
        categories.map((category, index) => <CategoryItem to={category.to} key={index} text={category.text} />)
      ) : (
        <div> loading </div>
      )}
    </S.CategoriesList>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default Categories;
