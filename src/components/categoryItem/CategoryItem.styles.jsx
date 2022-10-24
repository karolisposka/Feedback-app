import Styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = Styled(NavLink)`
    background: ${(props) => props.theme.background.primary};
    color:${(props) => props.theme.fonts.colors.info};
    font-family:${(props) => props.theme.fonts.names.primary};
    text-decoration:none;
    padding:5px 14px;
    text-transform:capitalize;
    font-weight:${(props) => props.theme.fonts.weight.medium};
    font-size:13px;
    line-height:19px;
    margin:4px;
    border-radius:12px;
    transition: 0.2s ease-in-out;
    &.active {
      background: ${(props) => props.theme.background.info};
      color: ${(props) => props.theme.background.primary};
    }

`;
