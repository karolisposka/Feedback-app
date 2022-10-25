import Styled from "styled-components";

export const Button = Styled.button`
    border-radius:8px;
    text-decoration:none;
    border:none;
    padding:16px;
    font-size:13px;
    color:${(props) => props.theme.fonts.colors.light};
    text-align:Center;
    font-weight:${(props) => props.theme.fonts.weight.medium};
    cursor:pointer;
`;
