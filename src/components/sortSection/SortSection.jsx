import React from "react";
import { customStyles, optionsSort } from "../select/selectConfig";
import * as S from "./SortSection.styles";

const SortSection = ({ number }) => {
  return (
    <S.Container>
      <S.InfoWrapper>
        <S.BulbIcon />
        <S.Suggestions>{number} Suggestions</S.Suggestions>
      </S.InfoWrapper>
      <S.Span>Sort by : </S.Span>
      <S.StyledSelect
        options={optionsSort}
        styles={customStyles}
        components={{ IndicatorSeparator: () => null }}
        placeholder="Sort"
        handleChange={(value) => {
          console.log(value);
        }}
      />
      <S.StyledButton to="/new">+ Add Feedback </S.StyledButton>
    </S.Container>
  );
};

export default SortSection;
