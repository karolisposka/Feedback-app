import React from "react";
import * as S from "./RoadMapNav.styles";

const RoadMapNav = ({ categories }) => {
  return (
    <S.NavBar>
      {categories &&
        categories.map((item, index) => (
          <S.Link key={index} to={item.to}>
            {item.text}
          </S.Link>
        ))}
    </S.NavBar>
  );
};

export default RoadMapNav;
