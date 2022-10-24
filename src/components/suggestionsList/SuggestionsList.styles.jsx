import Styled from "styled-components";
import SuggestionCard from "../suggestionCard/SuggestionCard";

export const Container = Styled.div`
  display:flex;
  flex-wrap:wrap;
  background:${(props) => props.theme.background.primary};
  margin:1rem;
`;

export const ListCard = Styled(SuggestionCard)`
  width:calc(100% - 2rem);
  margin:0.5rem 0;
`;
