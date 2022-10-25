import React from "react";
import * as S from "./SuggestionsList.styles";
import Empty from "../empty/Empty";

const SuggestionsList = ({ list }) => {
  return (
    <S.Container>
      {list ? (
        list.map((listItem, index) => {
          return (
            <S.ListCard
              id={listItem.id}
              title={listItem.title}
              key={index}
              text={listItem.description}
              category={listItem.category}
              upwotes={listItem.upvotes}
              comments={listItem.comments}
            />
          );
        })
      ) : (
        <>
          <Empty />
        </>
      )}
    </S.Container>
  );
};

export default SuggestionsList;
