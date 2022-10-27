import React from "react";
import * as S from "./CommentsList.styles";

const CommentsList = ({ comments }) => {
  return (
    <S.Container>
      <S.Title>{comments && comments[0].comments.length} comments</S.Title>
      <S.List>
        {comments ? (
          comments[0].comments.map((item, index) => (
            <S.Card
              key={index}
              id={item.id}
              text={item.content}
              name={item.user[0].name}
              username={item.user[0].username}
              replies={item.replies}
            />
          ))
        ) : (
          <div>no comment yet</div>
        )}
      </S.List>
    </S.Container>
  );
};

export default CommentsList;
