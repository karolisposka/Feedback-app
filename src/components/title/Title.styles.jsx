import Styled from "styled-components";

export const Title = Styled.h5`
  color:${(props) => props.theme.fonts.colors.light},
  font-size:3px;
  font-family: ${(props) => props.theme.fonts.names.primary},
`;
