import React from "react";
import { useSelector } from "react-redux";
import { suggestionsSelector } from "../../store/selectors";
import * as S from "./RoadMap.styles";
import RoadMapListItem from "../roadMapListItem/RoadMapListItem";

const RoadMap = ({ className }) => {
  const suggestions = useSelector(suggestionsSelector);

  const items = [
    {
      status: "planned",
      number: suggestions && suggestions.filter((item) => item.status.toLowerCase() === "planned").length,
      color: "#F49F85",
    },
    {
      status: "in-Progress",
      number: suggestions && suggestions.filter((item) => item.status.toLowerCase() === "in-progress").length,
      color: "#AD1FEA",
    },
    {
      status: "live",
      number: suggestions && suggestions.filter((item) => item.status.toLowerCase() === "live").length,
      color: "#62BCFA",
    },
  ];

  return (
    <S.Container className={className}>
      <S.TitleWrapper>
        <S.Title>Roadmap</S.Title>
        <S.StyledLink to="/roadmap/in-progress">view</S.StyledLink>
      </S.TitleWrapper>
      <S.List>
        {items &&
          items.map((item, index) => (
            <RoadMapListItem key={index} status={item.status} color={item.color} number={item.number} />
          ))}
      </S.List>
    </S.Container>
  );
};

export default RoadMap;
