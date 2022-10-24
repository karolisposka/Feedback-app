import Styled from "styled-components";
import Select from "../select/Select";
import Button from "../button/Button";
import { FaLightbulb } from "react-icons/fa";

export const Container = Styled.section`
  background:${(props) => props.theme.background.darkBlue};
  font-family:${(props) => props.theme.fonts.names.primary};
  padding:1rem;
  position:relative;
  @media(min-width:486px){
    border-radius:8px;
    margin:0 1rem;
  }
`;

export const InfoWrapper = Styled.div`
  color:${(props) => props.theme.fonts.colors.light};
  display:none;
  @media(min-width:486px){
    display:inline;
    margin:1rem;
  }
  
`;

export const BulbIcon = Styled(FaLightbulb)`
  font-size:1.5rem;
  margin: -6px 4px;

`;

export const Suggestions = Styled.span`
  font-weight:700;
  font-size:18px;
  line-height:19px;
  margin:4px;
`;

export const Span = Styled.span`
  color:${(props) => props.theme.fonts.colors.primary};
  font-weight:${(props) => props.theme.fonts.weight.light};
`;

export const StyledSelect = Styled(Select)`
  display:inline-block;
  width:6rem;
  
`;

export const StyledButton = Styled(Button)`
  background:${(props) => props.theme.background.purple};
  position:absolute;
  top:0.65rem;
  right:1rem;
`;
