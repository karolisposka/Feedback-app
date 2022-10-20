import Styled, { keyframes } from "styled-components";
import Image from "../../assets/suggestions/mobile/background-header.png";
import Section from "../section/Section";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const Header = Styled.header`
    width:100%;
    background-image: url(${Image});
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    @media(min-width:376px){
        display:none;
    }
`;

export const ContentWrapper = Styled(Section)`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0.5rem 1rem;
`;

export const Title = Styled.h1`
    font-size:15px;
    color:${(props) => props.theme.fonts.colors.light};
    display:inline-block;
    font-family:${(props) => props.theme.fonts.names.primary};
    line-height: 22px;
    letter-spacing: -0.19px;
`;

export const Span = Styled.span`
    display:block;
    font-size:13px;
    font-weight:${(props) => props.theme.fonts.weight.medium};
    opacity: 0.75;
    
`;

export const Button = Styled.button`
    border:none;
    background:transparent;
`;

//keyframe for buttons smooth change

const opacity = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 100%;
    }
`;

export const BurgerMenu = Styled(FaBars)`
    color:${(props) => props.theme.fonts.colors.light};
    width:100%;
    height:100%;
    font-size:1.2rem;
    animation: ${opacity} 0.2s ease-in-out;
`;

export const CloseBtn = Styled(IoMdClose)`
    color:${(props) => props.theme.fonts.colors.light};
    font-size:1.2rem;
    animation: ${opacity} 0.2s ease-in-out;
`;
