import Styled from "styled-components";

export const Container = Styled.div`
    background:${(props) => props.theme.background.primary};

`;

export const Section = Styled.section`
    max-width:1200px;
    margin:0 auto;
`;
