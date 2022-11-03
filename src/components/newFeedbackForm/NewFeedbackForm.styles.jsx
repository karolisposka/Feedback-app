import Styled from "styled-components";
import Select from "../select/Select";
import Image from "../../assets/suggestions/mobile/background-header.png";
import ButtonSubmit from "../buttonSubmit/ButtonSubmit";
import Notification from "../notification/Notification";

export const Container = Styled.div`
  margin:36px 24px;
  font-family:${(props) => props.theme.fonts.names.primary};
  background:${(props) => props.theme.background.light};
  border-radius:8px;
  position:relative;
  &::before{
    content:'+';
    font-size:24px;
    text-align:center;
    line-height:37px;
    color:${(props) => props.theme.fonts.colors.light};
    position:absolute;
    top:-20px;
    left:24px;
    width:40px;
    height:40px;
    border-radius:50%;
    background-image:url(${Image});
    background-size:cover;
    background-position:bottom;
  }
`;

export const StyledNotification = Styled(Notification)`
  margin:1.3rem 1rem;
`;

export const Form = Styled.form`
  padding:36px 24px;
`;

export const Title = Styled.h3`
  font-size:18px;
  font-weight:bold;
  color:${(props) => props.theme.fonts.colors.darkBlue};
`;

export const StyledSelect = Styled(Select)`
`;

export const TextArea = Styled.textarea`
  width:100%;
  box-sizing:Border-box;
  border-radius:8px;
  padding:1rem;
  font-size:13px;
  color:${(props) => props.theme.fonts.colors.darkBlue};
  background:${(props) => props.theme.background.primary};
  border:none;
  outline: ${(props) => (props.error ? "1px solid #D73737" : "none")};
  height:120px;
  resize:none;
  &:focus{
    outline: ${(props) => (props.error ? "1px solid #D73737" : "1px solid #4661E6")};
  }
`;

export const Button = Styled(ButtonSubmit)`
  background:${(props) => props.theme.background.purple};
  width:calc(100% - 16px);
  margin: 8px;

`;

export const CancelBtn = Styled(ButtonSubmit)`
  background:${(props) => props.theme.background.darkBlue};
  width:calc(100% - 16px);
  margin:8px;

`;
