import React from "react";
import * as S from "./RepliesList.styles";

const RepliesList = ({ replies }) => {
  return (
    <S.Container>
      <S.List>
        {replies &&
          replies.map((reply, index) => (
            <S.Card
              key={index}
              content={reply.content}
              username={reply.user[0].username}
              name={reply.user[0].name}
              id={reply.id}
              imageUrl={"null"}
            />
          ))}
      </S.List>
    </S.Container>
  );
};

export default RepliesList;
