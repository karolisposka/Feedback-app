import Styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const BtnContainer = Styled.div`
    padding: 24px 24px 0 24px;    
    font-family:${(props) => props.theme.fonts.names.primary};
    display:flex;
    align-items:Center;

`;

export const StyledLink = Styled(Link)`
    color:${(props) => props.theme.fonts.colors.blue};
    font-size:13px;
    font-weight:${(props) => props.theme.fonts.weight.bold};
    text-decoration:none;
    transition:0.3s ease-in-out;
    &:hover{
        text-decoration:underline;
    }
`;

export const Arrow = Styled(FaAngleLeft)`
    margin-right:4px;
    color:${(props) => props.theme.fonts.colors.info};
`;
