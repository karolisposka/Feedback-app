import Styled from "styled-components";
import CategoryItem from "../categoryItem/CategoryItem";

export const CategoriesList = Styled.div`
  display:flex;
  flex-wrap:wrap;

`;

export const Card = Styled(CategoryItem)`
  @media(min-width:486px) and (max-width:768px){
    font-size:10px;
    padding:0.1rem 0.5rem;
    margin:2px;
  }

`;
