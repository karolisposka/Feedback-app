import Styled, { keyframes } from "styled-components";
import Button from "../buttonSubmit/ButtonSubmit";

export const Container = Styled.div`
    &:not(:last-child){
        border-bottom:1px solid rgba(0,0,0,0.1);
    }  
`;

export const UserInfoSection = Styled.section`
    display:flex;
    justify-content:space-between;
`;

export const ReplyBtn = Styled.button`
    color:${(props) => props.theme.fonts.colors.info};
    border:none;
    background:transparent;
    cursor:pointer;
`;

export const UserInfo = Styled.div`
    display:flex;
    align-items:center;
`;

export const Image = Styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
`;

export const Name = Styled.h4`
    display:inline-block;
    width:100%;
    margin-left:8px;
    color:${(props) => props.theme.fonts.colors.darkBlue};
    font-weight:${(props) => props.theme.fonts.weight.bold};
    font-size:13px;
`;
export const UserName = Styled.span`
    display:block;
    font-weight:${(props) => props.theme.fonts.weight.medium};
    color:${(props) => props.theme.fonts.colors.blue};
`;

export const Text = Styled.p`
    font-size:13px;
    font-weight:${(props) => props.theme.fonts.weight.medium};
    color:${(props) => props.theme.fonts.colors.blue};
    line-height:18.79px;
`;

export const ReplyContainer = Styled.form`
    width:100%;
    display:flex;
    margin:1rem 0;
    justify-content:space-between;
    align-items:flex-start;
`;

const displayTextArea = keyframes`
    0%{
        transform:translateY(-100px);
        opacity:0;
    }
    100%{
        transform:translateY(0);
        opacity:1
    }
`;

export const TextArea = Styled.textarea`
    resize:none;
    background:${(props) => props.theme.background.primary};
    height:70px;
    width:60%;
    border-radius:8px;
    animation: ${displayTextArea} 0.3s ease-in-out;
    outline: ${(props) => (props.error ? "1px solid #D73737" : null)};
    &:focus{
        outline: ${(props) => (props.error ? "1px solid #D73737" : "1px solid #4661E6")}
    }
    @media(min-width:486px){
        width:80%;
    }

`;

export const SubmitBtn = Styled(Button)`
    background:${(props) => props.theme.background.purple};
    @media(min-width:486px){
        padding:0.5rem 1.5rem;
    }
    
`;
