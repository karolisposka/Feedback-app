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

export const InputWrapper = Styled.div`
    width:calc(100% - 2rem);
    background:${(props) => props.theme.background.primary};
    padding:15px;
    border-radius:8px;
    border: ${(props) => props.focused && "1px solid #4661E6"};
    border: ${(props) => props.error && !props.focused && "1px solid #D73737"};
    border: ${(props) => props.error && props.focused && "1px solid #D73737"};
`;

export const Input = Styled.input`
    box-sizing:border-box;
    background:transparent;
    outline:none;
    color:${(props) => props.theme.fonts.colors.darkBlue};
    font-size:13px;
    border:none;
`;

export const Span = Styled.p`
    color: ${(props) => props.theme.fonts.colors.danger};
    font-weight:${(props) => props.theme.fonts.weight.medium};
    margin:4px 0;
    font-size:14px;

`;
