import Styled from "styled-components";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BsFillChatFill } from "react-icons/bs";

export const Container = Styled.div`
    font-family:${(props) => props.theme.fonts.names.primary};
    background:${(props) => props.theme.background.light};
    width:100%;
    border-radius:8px;
    margin:4px 0;
    position:relative;
    overflow:hidden;
    &:before{
        content:'';
        position:absolute;
        width:100%;
        height:6px;
        top:0;
        left:0;
        background:${(props) => props.color};
    }
`;

export const ContentWrapper = Styled.section`
    padding:24px;

`;

export const Status = Styled.p`
    color:${(props) => props.theme.fonts.colors.blue};
    font-size:13px;
    line-height: 19px;
    display:inline;
    margin-left:4px;
    font-weight:${(props) => props.theme.fonts.weight.light};
`;

export const Bullet = Styled.span`
    display:inline-block;
    width:7px;
    height:7px;
    margin-right:4px;
    background:${(props) => props.color};
    border-radius:50%;
`;

export const Title = Styled.h3`
    font-size:13px;
    color:${(props) => props.theme.fonts.colors.darkBlue};
    font-weight:${(props) => props.theme.fonts.weight.bold};
`;

export const Description = Styled.p`
    font-weight:${(props) => props.theme.fonts.weight.medium};
    font-size:13px;
    color:${(props) => props.theme.fonts.colors.blue};

`;

export const Category = Styled.div`
    background: ${(props) => props.theme.background.primary};
    color:${(props) => props.theme.fonts.colors.info};
    font-family:${(props) => props.theme.fonts.names.primary};
    text-decoration:none;
    padding:5px 14px;
    display:inline;
    text-transform:capitalize;
    font-weight:${(props) => props.theme.fonts.weight.medium};
    font-size:13px;
    line-height:19px;
    border-radius:12px;
`;

export const FlexWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:16px;
`;

export const Upwotes = Styled.div`
  background:${(props) => props.theme.background.primary};
  border-radius:8px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  width:12%;
  font-size:13px;
  
  padding:8px;
`;

export const ArrowUp = Styled(MdOutlineKeyboardArrowUp)`
  color:${(props) => props.theme.background.info};
  font-weight:${(props) => props.theme.fonts.weight.bold};
`;

export const Chat = Styled(BsFillChatFill)`
`;
