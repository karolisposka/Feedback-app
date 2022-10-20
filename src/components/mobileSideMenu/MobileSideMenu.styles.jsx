import Styled from "styled-components";

export const MobileMenuContainer = Styled.div`
    background:rgba(0,0,0,0.5);
    height:calc(100vh - 72px);
    transition:0.3s ease-in-out;
    width:${(props) => (props.display ? "100%" : "0%")};
    position:absolute;
    top:0;
    right:0;
    display:flex;
    justify-content:flex-end;
    overflow:hidden;
    @media(min-width:376px){
        display:none;
    }
`;

export const MobileMenu = Styled.div`
    background:${(props) => props.theme.background.primary};
    height:100%;
    width:75%;
`;
