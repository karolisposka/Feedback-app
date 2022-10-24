import React from "react";
import * as S from "./Button.styles";

const Button = ({ className, children, to }) => {
  return (
    <S.Button className={className} to={to}>
      {children}
    </S.Button>
  );
};

export default Button;
