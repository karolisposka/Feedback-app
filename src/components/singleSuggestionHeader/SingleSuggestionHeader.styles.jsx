import Styled from "styled-components";
import Button from "../button/Button";
import BackBtn from "../backButton/BackBtn";

export const Header = Styled.div`
  width:calc(100% - 48px);
  display:flex;
  justify-content:space-between;
  align-items:Center;
  padding:24px;

`;

export const Back = Styled(BackBtn)`
  padding:0;
`;

export const EditButton = Styled(Button)`
  background:${(props) => props.theme.fonts.colors.info};
  padding:0.5rem 1rem;

`;
