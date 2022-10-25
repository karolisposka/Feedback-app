import Styled from "styled-components";
import RoadMapListCard from "../roadmapListCard/RoadMapListCard";

export const Container = Styled.div`
    font-family:${(props) => props.theme.fonts.names.primary};
    padding:1rem;
    min-height:69vh;
    
`;

export const Title = Styled.h3`
    color:${(props) => props.theme.fonts.colors.darkBlue};
    margin:2px 0;
    line-height: 26.01px;
    

`;

export const Text = Styled.p`
    color:${(props) => props.theme.fonts.colors.blue};
    font-weight:${(props) => props.theme.fonts.weight.medium};
    font-size:13px;
    line-height: 18.79px;
    margin:2px 0;

    
`;

export const List = Styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top:24px;
    
`;

export const Card = Styled(RoadMapListCard)`
    
    
`;
