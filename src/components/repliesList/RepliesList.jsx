import React from "react";
import * as S from "./RepliesList.styles";

const RepliesList = ({ replies }) => {
  return (
    <S.Container>
      <S.List>
        {replies &&
          replies.map((reply, index) => (
            <S.Card key={index} content={reply.content} userInfo={reply.user} id={reply.id} />
          ))}
      </S.List>
    </S.Container>
  );
};

export default RepliesList;
