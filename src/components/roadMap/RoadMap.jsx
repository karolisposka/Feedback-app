import React from "react";
import * as S from "./RoadMap.styles";
import RoadMapListItem from "../roadMapListItem/RoadMapListItem";

const items = [
  {
    status: "planned",
    number: 2,
    color: "#F49F85",
  },
  {
    status: "in-Progress",
    number: 5,
    color: "#AD1FEA",
  },
  {
    status: "live",
    number: 1,
    color: "#62BCFA",
  },
];

const RoadMap = ({ className }) => {
  return (
    <S.Container className={className}>
      <S.TitleWrapper>
        <S.Title>Roadmap</S.Title>
        <S.StyledLink to="/roadmap">view</S.StyledLink>
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
