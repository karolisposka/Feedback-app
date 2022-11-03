import React from "react";
import * as S from "./CommentsList.styles";

const CommentsList = ({ comments }) => {
  return (
    <S.Container>
      {comments ? (
        <>
          <S.Title>{comments.length + " comments"}</S.Title>
          <S.List>
            {comments.map((item, index) => (
              <S.Card
                key={index}
                id={item.id}
                text={item.content}
                userInfo={item.user ? item.user[0] : null}
                replies={item.replies}
              />
            ))}
          </S.List>
        </>
      ) : (
        <div>no comment yet</div>
      )}
    </S.Container>
  );
};

export default CommentsList;
