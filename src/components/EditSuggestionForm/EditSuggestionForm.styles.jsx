import Styled from "styled-components";
import Image from "../../assets/suggestions/mobile/background-header.png";
import Button from "../buttonSubmit/ButtonSubmit";

export const Container = Styled.div`
    margin:36px 24px;
    font-family:${(props) => props.theme.fonts.names.primary};
    background:${(props) => props.theme.background.light};
    border-radius:8px;
    position:relative;
    &::before{
        content:'+';
        font-size:24px;
        text-align:center;
        line-height:37px;
        color:${(props) => props.theme.fonts.colors.light};
        position:absolute;
        top:-20px;
        left:24px;
        width:40px;
        height:40px;
        border-radius:50%;
        background-image:url(${Image});
        background-size:cover;
        background-position:bottom;
    }
`;

export const Form = Styled.form`
    padding:36px 24px;
`;

export const Title = Styled.h3`
    font-size:18px;
    color:${(props) => props.theme.fonts.colors.darkBlue};
    
`;

export const Textarea = Styled.textarea`
    resize:none;
    width:100%;
    height:100px;
    background:${(props) => props.theme.background.primary};
    outline:${(props) => (props.error ? "1px solid #D73737" : null)};
    border-radius:8px;
    border:none;
    &:focus{
        outline:${(props) => (props.error ? "1px solid #D73737" : "1px solid #4661E6")};
    }
`;

export const ButtonsWrapper = Styled.div`
    margin:32px 8px;
    width:calc(100% - 8px);
`;

export const SubmitBtn = Styled(Button)`
    background:${(props) => props.theme.background.purple};
    width:100%;
    margin:8px 0;
`;

export const CancelBtn = Styled(Button)`
    background:${(props) => props.theme.background.darkBlue};
    width:100%;
    margin:8px 0;
`;

export const DeleteBtn = Styled(Button)`
    background:${(props) => props.theme.background.danger};
    width:100%;
    margin:8px 0;
`;
