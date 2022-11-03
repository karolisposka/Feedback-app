import Styled from "styled-components";

export const Container = Styled.div`
    width:100%;
    background: ${(props) => props.theme.background.primary};
    position:relative;
    min-height:86vh;
    @media(min-width:767px){
        width:75%;
        margin: 2rem 0;
    }
`;
