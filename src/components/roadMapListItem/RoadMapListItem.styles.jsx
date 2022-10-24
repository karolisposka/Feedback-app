import Styled from "styled-components";

export const ListItemContainer = Styled.div`
  display:flex;
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
  display:inline-block;
  width:80%;
  margin:5px;
  text-transform: capitalize;

`;

export const Span = Styled.span`
  display:inline-block;
  width:10%;
`;
