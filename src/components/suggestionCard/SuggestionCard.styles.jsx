import Styled from "styled-components";
import Title from "../title/Title";
import CategoryItem from "../categoryItem/CategoryItem";
import { BsFillChatFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const Container = Styled.div`
  background:${(props) => props.theme.background.light};
  padding:1rem;
  width:100%;
  display:inline-grid;
  grid-template-columns: 1fr repeat(3);
  grid-template-rows: 1fr repeat(4);
  border-radius:8px;
  @media(min-width:486px){
    grid-template-columns: 0.25fr 0.25fr 2.5fr 0.25fr;
    grid-template-rows: 0.25fr 0.5fr 0.25fr;
  }

`;

export const CardTitle = Styled(Title)`
  grid-column: span 3;
  grid-row: 1;
  color:${(props) => props.theme.fonts.colors.darkBlue};
  font-size:18px;
  margin:4px 0;
  font-family: ${(props) => props.theme.fonts.names.primary};
  @media(min-width:486px){
      grid-column: 2/4;
      grid-row:1;
      margin:0;
      padding:0;
  }
`;

export const Text = Styled.p`
  grid-column: 1 / 4;
  grid-row: 2;
  margin:4px 0;
  color:${(props) => props.theme.fonts.colors.blue};
  @media(min-width:486px){
    grid-column: 2/4;
    margin:8px 0;
  }
`;

export const Category = Styled.span`
  margin:4px 0;
  grid-column: 1 / 2;
  grid-row:3;
  border-radius:8px;
  background: ${(props) => props.theme.background.primary};
  color:${(props) => props.theme.fonts.colors.info};
  font-family:${(props) => props.theme.fonts.names.primary};
  text-decoration:none;
  padding:5px 14px;
  text-transform:capitalize;
  font-weight:${(props) => props.theme.fonts.weight.medium};
  font-size:13px;
  line-height:19px;
  border-radius:12px;
  @media(min-width:486px){
    grid-column: 2;
    display:inline;
    width:100%;
    text-align:Center;
  }
`;

export const Upvotes = Styled.div`
  background:${(props) => props.theme.background.primary};
  grid-column: 1;
  grid-row:4;
  margin-top:12px;
  cursor:pointer;
  border-radius:8px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:8px;
  width:75%;
  @media(min-width:486px){
    grid-column: 1;
    grid-row: 1/3;
    flex-direction:column;
    align-items:Center;
    justify-content:Center;
    padding:8px 0px;
    width:75%;
    margin: 0;
  }
`;

export const ArrowUp = Styled(MdOutlineKeyboardArrowUp)`
  color:${(props) => props.theme.background.info};
  font-weight:${(props) => props.theme.fonts.weight.bold};
`;

export const Comments = Styled.div`
  grid-column: 3;
  grid-row:4;
  margin-top:12px;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  @media(min-width:486px){
    grid-column: 3;
    grid-row: 2;
  }
`;

export const ChatIcon = Styled(BsFillChatFill)`
  color:${(props) => props.theme.background.primary};
  cursor:pointer;
  margin-right:4px;
`;

export const Span = Styled.span`
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  color:${(props) => props.theme.fonts.colors.darkBlue};
  font-size: 13px;
  line-height:19px;
  margin-left:5px;
  text-align:center;
  @media(min-width:468px){
    margin-left:0;
  }
`;
