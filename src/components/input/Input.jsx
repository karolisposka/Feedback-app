import React from "react";
import * as S from "./Input.styles";

const Input = ({ label, comment, placeholder, type, handleChange, handleBlur, error, value, name, children }) => {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.Comment>{comment}</S.Comment>
      {type === "text" ? (
        <S.Input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          error={error}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        children
      )}
      {error && <S.Span>{error}</S.Span>}
    </S.InputContainer>
  );
};

export default Input;
