import Styled, { keyframes } from "styled-components";
import Button from "../buttonSubmit/ButtonSubmit";

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

export const textAreaWrapper = Styled.div`
  width:80%;

`;

export const TextArea = Styled.textarea`
    resize:none;
    background:${(props) => props.theme.background.primary};
    height:70px;
    width:100% !important;
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

export const Error = Styled.span`
  color:${(props) => props.theme.fonts.colors.danger};
  display:block;
`;

export const SubmitBtn = Styled(Button)`
    background:${(props) => props.theme.background.purple};
    @media(min-width:486px){
        padding:0.5rem 1.5rem;
    }
    
`;
