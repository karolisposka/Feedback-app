import Styled from "styled-components";

export const Container = Styled.div`
  background:${(props) => props.theme.background.primary};
  min-height:100vh;
`;

export const Section = Styled.section`
  height:100%;
  @media(min-width:767px){
    display:flex;
    flex-wrap:wrap;
    max-width:1200px;
    margin:0 auto;
  }
`;
