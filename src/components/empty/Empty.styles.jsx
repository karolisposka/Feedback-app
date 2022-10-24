import Styled from "styled-components";
import Button from "../button/Button";

export const Container = Styled.div`
  width:100%;
  min-height:80vh;
  background:${(props) => props.theme.background.light};
  border-radius:8px;
  
`;

export const ContentWrapper = Styled.div`
  padding:3rem;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  align-items:Center;
  font-family:${(props) => props.theme.fonts.names.primary};
  @media(min-width:767px){
    width:33%;
  }
`;

export const Image = Styled.img`
  object-fit:contain;
  width:130px;
  height:136px;
  
`;

export const Title = Styled.h3`
  font-size:18px;

  color:${(props) => props.theme.fonts.colors.darkBlue};
`;

export const Content = Styled.p`
  font-size:13px;
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  text-align:center;
  color:${(props) => props.theme.fonts.colors.blue};
  
  
`;

export const StyledButton = Styled(Button)`
  background:${(props) => props.theme.background.purple};
  padding:0.5rem 3rem;
  margin:2rem 0;
`;
