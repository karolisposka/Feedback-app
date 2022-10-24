import React from "react";
import PropTypes from "prop-types";
import * as S from "./RoadMapListItem.styles";

const RoadMapListItem = ({ status, color, number }) => {
  return (
    <S.ListItemContainer>
      <S.Bubble color={color} />
      <S.Status>{status}</S.Status>
      <S.Span>{number}</S.Span>
    </S.ListItemContainer>
  );
};

RoadMapListItem.propTypes = {
  color: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default RoadMapListItem;
