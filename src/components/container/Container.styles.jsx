import Styled from "styled-components";

export const Container = Styled.div`
    width:100%;
    background: ${(props) => props.theme.background.primary};
    position:relative;
`;
