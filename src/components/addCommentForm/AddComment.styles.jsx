import Styled from "styled-components";
import Button from "../buttonSubmit/ButtonSubmit";

export const Form = Styled.form`
    margin:1rem;
    padding:1rem;
    font-family:${(props) => props.theme.fonts.names.primary};
    background:${(props) => props.theme.background.light};
    border-radius:8px;

`;

export const Title = Styled.h3`
    color:${(props) => props.theme.fonts.colors.darkBlue};
    font-size:18px;
`;

export const TextArea = Styled.textarea`
    background:${(props) => props.theme.background.primary};
    width:calc(100% - 2rem);
    border-radius:8px;
    height:120px;
    border:none;
    resize:none;
    padding:1rem;
    margin:8px 0;
    outline:${(props) => (props.error ? "1px solid #D73737" : null)};
    &:focus{
        outline:${(props) => (!props.error ? "1px solid #4661E6" : "1px solid #D73737")};
    }
`;

export const Error = Styled.span`
    color:${(props) => props.theme.fonts.colors.danger};
`;

export const ButtonWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:Center;
`;

export const SubmitBtn = Styled(Button)`
    background:${(props) => props.theme.background.purple};
    margin:8px 0;

`;
