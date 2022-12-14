import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../store/slices/suggestionsSlice";
import { mappedSuggestionsSelector } from "../../store/selectors";
import * as S from "./RoadMapList.styles";
import Loader from "../loader/Loader";

const RoadMapList = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector(mappedSuggestionsSelector);
  const { category } = useParams();
  const [items, setItems] = useState(null);
  const [color, setColor] = useState();

  const borderColor = (category) => {
    switch (category.toLowerCase()) {
      case "in-progress":
        return setColor("#AD1FEA");
      case "live":
        return setColor("#62BCFA");
      case "planned":
        return setColor("#F49F85");
    }
  };

  const displayTitle = (category) => {
    switch (category.toLowerCase()) {
      case "in-progress":
        return (
          <>
            <S.Title> In-Progress </S.Title>
            <S.Text>Features currently beeing developed </S.Text>
          </>
        );
      case "live":
        return (
          <>
            <S.Title>Live</S.Title>
            <S.Text>Already developed features</S.Text>
          </>
        );
      case "planned":
        return (
          <>
            <S.Title>Planned</S.Title>
            <S.Text>Already developed features</S.Text>
          </>
        );
    }
  };

  const filterData = (data, category) => {
    return data.filter((item) => item.status === category.toLowerCase());
  };

  useEffect(() => {
    if (!suggestions) {
      dispatch(getData());
    }
  }, []);

  useEffect(() => {
    if (suggestions && category) {
      setItems(filterData(suggestions, category));
      borderColor(category);
    }
  }, [category, suggestions]);

  return (
    <S.Container>
      {displayTitle(category)}
      <S.List>
        {items ? (
          items.map((item, index) => (
            <S.Card
              key={index}
              color={color}
              status={item.status}
              title={item.title}
              description={item.description}
              category={item.category}
              upvotes={item.upvotes}
            />
          ))
        ) : (
          <Loader />
        )}
      </S.List>
    </S.Container>
  );
};

export default RoadMapList;
