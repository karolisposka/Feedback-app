import Styled from "styled-components";
import Button from "../buttonSubmit/ButtonSubmit";

export const Form = Styled.form`
  background:${(props) => props.theme.background.light};
  padding:1rem;
  border-radius:8px;

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
