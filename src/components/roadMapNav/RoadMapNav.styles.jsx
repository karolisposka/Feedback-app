import Styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = Styled.nav`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    font-family:${(props) => props.theme.fonts.names.primary};
`;

export const Link = Styled(NavLink)`
    color:${(props) => props.theme.fonts.colors.darkBlue};
    opacity:0.4;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    font-weight:${(props) => props.theme.fonts.weight.bold};
    font-size:13px;
    padding:20px 0 16.5px 0;
    width:33%;
    text-decoration:none;
    text-align:center;
    &.active{
        border-bottom: 4.5px solid ${(props) => props.theme.background.purple};
        opacity:1;
    }
`;
