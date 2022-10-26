import Styled from "styled-components";

export const Container = Styled.div`
  background:${(props) => props.theme.background.primary};

`;

export const Section = Styled.section`
  max-width:600px;
  margin: auto;
  padding:1rem;

`;
