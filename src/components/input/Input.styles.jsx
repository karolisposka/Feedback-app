import Styled from "styled-components";

export const InputContainer = Styled.div`
    margin:8px;
`;

export const Label = Styled.label`
    font-size:13px;
    color:${(props) => props.theme.fonts.colors.darkBlue};
    font-weight:${(props) => props.theme.fonts.weight.bold};
`;

export const Comment = Styled.p`
    font-size:13px;
    color:${(props) => props.theme.fonts.colors.blue};
    font-weight:${(props) => props.theme.fonts.weight.medium};    
`;

export const Input = Styled.input`
    width:100%;
    box-sizing:border-box;
    padding:15px 0;
    border-radius:8px;
    outline: ${(props) => (props.error ? "1px solid red" : null)};
    border:none;
    background:${(props) => props.theme.background.primary};
    &:focus{
        outline:  1px solid blue;
    }
`;

export const Span = Styled.p`
    color: ${(props) => props.theme.fonts.colors.danger};
    font-weight:${(props) => props.theme.fonts.weight.medium};
    margin:4px 0;
    font-size:14px;

`;
