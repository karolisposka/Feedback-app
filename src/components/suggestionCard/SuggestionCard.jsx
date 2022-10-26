import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { upvoteIncremented, errorRecieved } from "../../store/slices/suggestionsSlice";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import * as S from "./SuggestionCard.styles";

const SuggestionCard = ({ title, text, category, upwotes, comments, className, id }) => {
  const dispatch = useDispatch();

  const upvote = async (suggestion_id) => {
    try {
      const res = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: "v1/upvotes/add",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { suggestion_id },
      });
      if (res.data.msg) {
        return dispatch(upvoteIncremented(suggestion_id));
      }
      if (res.data.err) {
        return dispatch(errorRecieved(res.data.err));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();
  return (
    <S.Container className={className}>
      <S.CardTitle>{title}</S.CardTitle>
      <S.Text>{text}</S.Text>
      <S.Category to={`/${category}`} text={category} />
      <S.Upvotes
        onClick={() => {
          upvote(id);
        }}
      >
        <S.ArrowUp />
        <S.Span> {upwotes} </S.Span>
      </S.Upvotes>
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
