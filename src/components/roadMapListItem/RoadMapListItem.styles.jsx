import Styled from "styled-components";

export const ListItemContainer = Styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center; 
`;

export const Bubble = Styled.div`
  height:7px;
  width:7px;
  margin-right:8px;
  border-radius:50%;
  background: ${(props) => props.color};
`;

export const Status = Styled.p`
  margin:5px;
  width:90%;
  text-transform: capitalize;
  @media(min-width:486px) and (max-width:768px){
    
    margin:3px;
    font-size:11px;
  }
`;

export const Span = Styled.span`
  width:13%;
  text-align:center;
  @media(min-width:486px) and (max-width:768px){
    font-size:11px;
    width:15%;
  }

`;
