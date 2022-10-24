import Styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = Styled(Link)`
    border-radius:8px;
    text-decoration:none;
    border:none;
    padding:16px;
    font-size:13px;
    color:${(props) => props.theme.fonts.colors.light};
    text-align:Center;
    font-weight:${(props) => props.theme.fonts.weight.medium}
`;
