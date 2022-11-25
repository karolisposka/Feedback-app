import React from "react";
import { useSelector } from "react-redux";
import { mappedSuggestionsSelector } from "../../store/selectors";
import * as S from "./RoadMap.styles";
import RoadMapListItem from "../roadMapListItem/RoadMapListItem";

const RoadMap = ({ className }) => {
  const suggestions = useSelector(mappedSuggestionsSelector);

  const formData = (data) => {
    if (data) {
      return [
        {
          status: "planned",
          number: data ? data.filter((item) => item.status === "planned").length : null,
          color: "#F49F85",
        },
        {
          status: "in-Progress",
          number: data ? data.filter((item) => item.status === "in-progress").length : null,
          color: "#AD1FEA",
        },
        {
          status: "live",
          number: data ? data.filter((item) => item.status === "live").length : null,
          color: "#62BCFA",
        },
      ];
    } else {
      return null;
    }
  };

  return (
    <S.Container className={className}>
      <S.TitleWrapper>
        <S.Title>Roadmap</S.Title>
        <S.StyledLink to="/roadmap/in-progress">view</S.StyledLink>
      </S.TitleWrapper>
      <S.List>
        {suggestions ? (
          formData(suggestions).map((item, index) => (
            <RoadMapListItem key={index} status={item.status} color={item.color} number={item.number} />
          ))
        ) : (
          <S.StyledLoader />
        )}
      </S.List>
    </S.Container>
  );
};

export default RoadMap;
