import Styled, { keyframes } from "styled-components";

const displayNotification = keyframes`
    0%{
        opacity:0;
        transform:translateY(-100px)
    }
    100%{
        opacity:1;
        transform: translateY(0);
    }
`;

export const Notification = Styled.div`
    background:${(props) => props.color};
    color:${(props) => props.theme.fonts.colors.light};
    border-radius:8px;
    position:absolute;
    top:0;
    left:0;
    font-size:13px;
    margin:1rem;
    padding:0.5rem;
    animation: 0.3s ease-in ${displayNotification};
    width:calc(100% - 3rem);

`;
