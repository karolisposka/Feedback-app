import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import * as S from "./SuggestionCard.styles";

const SuggestionCard = ({ title, text, category, upwotes, comments, className, id }) => {
  const navigate = useNavigate();
  return (
    <S.Container className={className}>
      <S.CardTitle>{title}</S.CardTitle>
      <S.Text>{text}</S.Text>
      <S.Category to={`/${category}`} text={category} />
      <S.Upwotes>
        <S.ArrowUp />
        <S.Span> {upwotes} </S.Span>
      </S.Upwotes>
      <S.Comments>
        <S.ChatIcon
          onClick={() => {
            navigate(`suggestion/${id}`);
          }}
        />
        <S.Span>{comments ? comments.length : 0}</S.Span>
      </S.Comments>
    </S.Container>
  );
};

SuggestionCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upwotes: PropTypes.number.isRequired,
  comments: PropTypes.array,
};

export default SuggestionCard;
