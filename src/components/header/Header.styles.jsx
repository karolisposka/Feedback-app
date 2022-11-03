import Styled, { keyframes } from "styled-components";
import Image from "../../assets/suggestions/mobile/background-header.png";
import Section from "../section/Section";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import InfoBox from "../infoBox/InfoBox";
import Button from "../button/Button";

export const Header = Styled.header`
    width:100%;
    background-image: url(${Image});
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    @media(min-width:486px) and (max-width:767px){
        background: ${(props) => props.theme.background.primary};
        height: 178px;
        padding:1rem 0;
    }
    @media(min-width:768px){
        width: 25%;
        height:100%;
        margin:2rem 0;
        background: ${(props) => props.theme.background.primary};
    }
`;

export const ContentWrapper = Styled(Section)`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0.5rem 1rem;
    @media(min-width:486px){
        flex-wrap:wrap;
        height:calc(100% - 2rem);
    }
    @media(min-width:768px){
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        width: calc(100% - 2rem);
        padding:0;
    }
`;

export const TitleWrapper = Styled.div`
    @media(min-width:486px) and (max-width:768px) {
        background-image: url(${Image});
        background-repeat:no-repeat;
        background-size:cover;
        width: calc(33% - 0.5rem);
        height:100%;
        display:flex;
        align-items:flex-end;
        border-radius:8px;
    }
    @media(min-width:768px){
        width:100%;
        background-image: url(${Image});
        margin-bottom:0.5rem;
        border-radius:8px;
        background-repeat:no-repeat;
        background-size:cover;
        padding-top:2rem;
    }
`;

export const Title = Styled.h1`
    font-size:15px;
    color:${(props) => props.theme.fonts.colors.light};
    display:inline-block;
    font-family:${(props) => props.theme.fonts.names.primary};
    line-height: 22px;
    letter-spacing: -0.19px;
    @media(min-width:486px){
        padding:1rem;
        margin:0;
    }
    
    
`;

export const Span = Styled.span`
    display:block;
    font-size:13px;
    font-weight:${(props) => props.theme.fonts.weight.medium};
    opacity: 0.75;
    
`;

export const Box = Styled(InfoBox)`
    display:none;
    @media(min-width:486px) and (max-width:767px) {
        display:block;
        width:calc(33% - 0.5rem)!important;
        margin:0;
        height:100%;
        &&:nth-of-type(4){
            display:none;
        }
    }
    @media(min-width:768px){
        display:block;
        width:100%;
        margin:0.5rem 0;
    }
`;

export const MenuButton = Styled.button`
    border:none;
    background:transparent;
    @media(min-width:486px){
        display:none;
    }
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

export const LoginBtn = Styled(Button)`
    display:block;
    width:100%;
    background:${(props) => props.theme.background.purple};
    margin:0.25rem 0;
    padding:0.5rem 0;

`;

export const RegisterBtn = Styled(Button)`
    display:block;
    width:100%;
    background:${(props) => props.theme.background.danger};
    margin:0.25rem 0;
    padding:0.5rem 0;
    
`;
