import React from "react";
import { useDispatch } from "react-redux";
import { upvote } from "../../store/slices/upvotesSlice";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./SuggestionCard.styles";

const SuggestionCard = ({ title, text, category, upvotes, comments, className, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToComments = (path) => {
    if (path.pathname.includes("suggestion")) {
      return;
    } else {
      navigate(`/suggestion/${id}`);
    }
  };

  return (
    <S.Container className={className}>
      <S.CardTitle>{title}</S.CardTitle>
      <S.Text>{text}</S.Text>
      <S.Category>{category} </S.Category>
      <S.Upvotes
        onClick={() => {
          dispatch(upvote(id));
        }}
      >
        <S.ArrowUp />
        <S.Span> {upvotes} </S.Span>
      </S.Upvotes>
      <S.Comments
        onClick={() => {
          navigateToComments(location);
        }}
      >
        <S.ChatIcon />
        <S.Span>{comments ? comments : 0}</S.Span>
      </S.Comments>
    </S.Container>
  );
};

SuggestionCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  comments: PropTypes.number,
};

export default SuggestionCard;
