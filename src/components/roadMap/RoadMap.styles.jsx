import Styled from "styled-components";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";

export const Container = Styled.div`
    font-family: ${(props) => props.theme.fonts.names.primary};
`;

export const TitleWrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-start;    
`;

export const Title = Styled.h1`
    font-size:18px;
    line-height:19px;
    margin:0;
    color:${(props) => props.theme.fonts.colors.darkBlue};
    @media(min-width:486px) and (max-width:768px){
        font-size:13px;
    }
    
`;

export const StyledLink = Styled(Link)`
    font-size:13px;
    line-height:19px;
    color:${(props) => props.theme.fonts.colors.info};
`;

export const List = Styled.div`
    margin:10px  0px;
`;

export const StyledLoader = Styled(Loader)`
    height:100%;

`;
