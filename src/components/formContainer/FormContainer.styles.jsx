import Styled from "styled-components";

export const Container = Styled.div`
  background:${(props) => props.theme.background.primary};
  min-height:100vh;

`;

export const Section = Styled.section`
  max-width:600px;
  margin: auto;
  padding:1rem;

`;
