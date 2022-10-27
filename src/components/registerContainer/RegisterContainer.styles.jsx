import Styled from "styled-components";
import BackBtn from "../backButton/BackBtn";

export const Container = Styled.div`
  background:${(props) => props.theme.background.primary};
  font-family:${(props) => props.theme.fonts.names.primary};
  min-height:100vh;
`;

export const Section = Styled.section`
  max-width:600px;
  margin:0 auto;
  padding:1rem;
`;

export const Back = Styled(BackBtn)`
    padding:1rem 0;
`;
