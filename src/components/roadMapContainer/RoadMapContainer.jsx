import React from "react";
import PropTypes from "prop-types";
import * as S from "./RoadMapContainer.styles";

const RoadMapContainer = ({ children }) => {
  return (
    <S.Container>
      <S.Section>{children}</S.Section>
    </S.Container>
  );
};

RoadMapContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RoadMapContainer;
