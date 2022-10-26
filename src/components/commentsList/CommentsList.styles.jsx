import Styled from "styled-components";
import CommentCard from "../commentCard/CommentCard";

export const Container = Styled.div`
    font-family:${(props) => props.theme.fonts.names.primary};
    background:${(props) => props.theme.background.light};
    margin:1rem;
    padding:1rem;
    border-radius:8px;
`;

export const Title = Styled.h3`
    font-size:18px;
    color:${(props) => props.theme.fonts.colors.darkBlue};
    
`;

export const List = Styled.div`
    display:flex;
    flex-wrap:wrap;
`;

export const Card = Styled(CommentCard)`
    width:100%;
`;
