import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.styles";

const Notification = ({ children, color, className }) => {
  return (
    <S.Notification className={className} color={color}>
      {children}
    </S.Notification>
  );
};

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};
export default Notification;
