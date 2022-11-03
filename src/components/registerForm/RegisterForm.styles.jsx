import Styled from "styled-components";
import Button from "../buttonSubmit/ButtonSubmit";

export const Form = Styled.form`
  margin:36px 24px;
  background:${(props) => props.theme.background.light};
  font-family:${(props) => props.theme.fonts.names.primary};
  padding:1rem;
  border-radius:8px;
  position:relative;
  overflow:hidden;
`;

export const Title = Styled.h3`
  font-size:18px;
  color:${(props) => props.theme.fonts.colors.darkBlue};
  line-height:19px;
  margin:0;
  padding:0.5rem;
`;

export const Submit = Styled(Button)`
  width:calc(100% - 16px); 
  margin:8px;
  background:${(props) => props.theme.background.purple};
`;

export const Reset = Styled(Button)`
  width:calc(100% - 16px); 
  margin:8px;
  background:${(props) => props.theme.background.danger};
`;
