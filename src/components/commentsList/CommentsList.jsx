import React from "react";
import * as S from "./CommentsList.styles";

const CommentsList = ({ comments }) => {
  console.log(comments);
  return (
    <S.Container>
      <S.Title>{comments.length} Comments</S.Title>
      <S.List>
        {comments ? (
          comments.map((item, index) => (
            <S.Card key={index} text={item.content} name={item.user.name} username={item.user.username} />
          ))
        ) : (
          <div>loading</div>
        )}
      </S.List>
    </S.Container>
  );
};

export default CommentsList;
