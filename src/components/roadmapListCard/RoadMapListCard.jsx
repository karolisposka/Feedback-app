import React from "react";
import * as S from "./RoadMapListCard.styles";

const RoadMapListCard = ({ className, status, color, title, description, category, upvotes }) => {
  return (
    <S.Container className={className} color={color}>
      <S.ContentWrapper>
        <S.Bullet color={color} />
        <S.Status>{status}</S.Status>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Category>{category}</S.Category>
        <S.FlexWrapper>
          <S.Upwotes>
            <S.ArrowUp />
            {upvotes}
          </S.Upwotes>
          <S.Chat />
        </S.FlexWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default RoadMapListCard;
