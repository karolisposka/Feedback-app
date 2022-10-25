import React from "react";
import * as S from "./CommentCard.styles";

const CommentCard = ({ text, username, name }) => {
  return (
    <S.Container>
      <S.UserInfoSection>
        <S.UserInfo>
          <S.Image src="https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx046-512.png" />
          <S.Name>
            {name}
            <S.UserName>@{username}</S.UserName>
          </S.Name>
        </S.UserInfo>
        <S.ReplyBtn> Reply </S.ReplyBtn>
      </S.UserInfoSection>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default CommentCard;
