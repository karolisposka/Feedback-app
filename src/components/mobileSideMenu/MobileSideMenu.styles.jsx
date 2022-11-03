import Styled from "styled-components";
import Button from "../button/Button";

export const MobileMenuContainer = Styled.div`
    background:rgba(0,0,0,0.5);
    height:100%;
    display: ${(props) => (props.display ? "flex" : "none")};
    transition: opacity 0.3s ease-in-out;
    opacity: ${(props) => (props.display ? 1 : 0)};
    position:absolute;
    top:0;
    right:0;
    display:flex;
    justify-content:flex-end;
    overflow:hidden;
    z-index:2;
    @media(min-width:486px){
        display:none;
    }
`;

export const MobileMenu = Styled.div`
    background:${(props) => props.theme.background.primary};
    height:100%;
    transition-delay: 0.3s;
    transition:0.2s ease-in-out;
    width:${(props) => (props.display ? "75%" : "0")}; 
`;

export const RegisterBtn = Styled(Button)`
    margin:0.5rem 1.5rem;
    padding:0.5rem 1.5rem;
    display:block;
    box-sizing:border-box;
`;

export const LoginBtn = Styled(Button)`
    margin: 0.5rem 1.5rem;
    box-sizing:border-box;
    background:${(props) => props.theme.background.danger};
    padding:0.5rem 1.5rem;
    display:block;
`;
