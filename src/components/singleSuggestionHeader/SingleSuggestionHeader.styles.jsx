import Styled from "styled-components";
import Button from "../buttonSubmit/ButtonSubmit";
import BackBtn from "../backButton/BackBtn";

export const Header = Styled.div`
  display:flex;
  justify-content:space-between;
  align-items:Center;
  padding:12px;

`;

export const Back = Styled(BackBtn)`
  padding:0;
`;

export const EditButton = Styled(Button)`
  background:${(props) => props.theme.fonts.colors.info};
  font-family:${(props) => props.theme.fonts.names.primary};
  /* padding:0.5rem 1rem; */

`;
