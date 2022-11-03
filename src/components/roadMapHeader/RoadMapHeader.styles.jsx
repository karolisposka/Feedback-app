import Styled from "styled-components";
import BackBtn from "../backButton/BackBtn";
import Button from "../button/Button";

export const Container = Styled.div`
    width:100%;
    background:${(props) => props.theme.background.darkBlue};
    font-family:${(props) => props.theme.fonts.names.primary};
`;

export const Section = Styled.section`
    max-width:1200px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;    
`;

export const BackButton = Styled(BackBtn)`
    color:${(props) => props.theme.fonts.colors.light};

`;

export const TitleWrapper = Styled.div`
    display:flex;
    flex-direction:column;
`;

export const Title = Styled.h3`
    padding: 3px 24px 24px 24px;
    margin:0;
    font-size:18px;
    color:${(props) => props.theme.fonts.colors.light};

`;

export const AddFeedbackBtn = Styled(Button)`
    background:${(props) => props.theme.background.purple};
    margin-right:24px;
    padding:0.5rem 1rem;
    
`;
