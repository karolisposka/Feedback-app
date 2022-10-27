import Styled from "styled-components";
import ReplyCard from "../replyCard/ReplyCard";

export const Container = Styled.div`
    padding:0 0.25rem;
    width:100%;
    border-left:1px solid rgba(0,0,0,0.1);
`;

export const List = Styled.section`
    
`;

export const Card = Styled(ReplyCard)`
    padding:0 1rem;
    margin:0;
    &:not(:last-child){
        border-bottom:none;
    }
`;
