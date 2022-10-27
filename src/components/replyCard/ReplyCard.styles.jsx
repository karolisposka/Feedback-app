import Styled from "styled-components";

export const Container = Styled.div`
   
`;

export const UserInfoSection = Styled.section`
    display:flex;
    justify-content:space-between;
`;

export const ReplyBtn = Styled.button`
    color:${(props) => props.theme.fonts.colors.info};
    border:none;
    background:transparent;
    cursor:pointer;
`;

export const UserInfo = Styled.div`
    display:flex;
    align-items:center;
`;

export const Image = Styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
`;

export const Name = Styled.h4`
    display:inline-block;
    width:100%;
    margin-left:8px;
    color:${(props) => props.theme.fonts.colors.darkBlue};
    font-weight:${(props) => props.theme.fonts.weight.bold};
    font-size:13px;
`;
export const UserName = Styled.span`
    display:block;
    font-weight:${(props) => props.theme.fonts.weight.medium};
    color:${(props) => props.theme.fonts.colors.blue};
`;

export const Text = Styled.p`
    font-size:13px;
    font-weight:${(props) => props.theme.fonts.weight.medium};
    color:${(props) => props.theme.fonts.colors.blue};
    line-height:18.79px;
    margin:0;
`;
