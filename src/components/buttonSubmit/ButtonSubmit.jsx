import React from "react";
import * as S from "./ButtonSubmit.styles";

const Button = ({ className, children, handleClick, type }) => {
  return (
    <S.Button type={type} className={className} onClick={handleClick}>
      {children}
    </S.Button>
  );
};

export default Button;
