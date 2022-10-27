import Styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = Styled(Link)`
    border-radius:8px;
    text-decoration:none;
    border:none;
    padding:16px;
    font-size:13px;
    text-align:Center;
    color:${(props) => props.theme.fonts.colors.light};
    font-family:${(props) => props.theme.fonts.names.primary};
    font-weight:${(props) => props.theme.fonts.weight.medium};
    background:${(props) => props.theme.background.purple};
`;
