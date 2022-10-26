import React from "react";
import * as S from "./SuggestionsList.styles";
import PropTypes from "prop-types";
import Empty from "../empty/Empty";

const SuggestionsList = ({ list }) => {
  return (
    <S.Container>
      {list.length > 0 ? (
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
