import React, { useRef } from "react";
import PropTypes from "prop-types";
import * as S from "./Input.styles";

const Input = ({ label, comment, placeholder, type, handleChange, handleBlur, error, value, name, children }) => {
  const ref = useRef(null);

  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.Comment>{comment}</S.Comment>
      {type ? (
        <S.InputWrapper error={error} focused={document.activeElement === ref.current}>
          <S.Input
            ref={ref}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </S.InputWrapper>
      ) : (
        children
      )}
      {error && <S.Span>{error}</S.Span>}
    </S.InputContainer>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  error: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
};

export default Input;
