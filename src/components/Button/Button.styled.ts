import styled from "styled-components";
import { IButton } from "../../interfaces/Button.interface";
import { colors } from "../../helpers/css-helper";

const { accentBlue, accentWhite } = colors;

const theme = {
  primary: accentBlue,
  secondary: accentWhite,
};

const invertTheme = ({ primary, secondary } = theme) => ({
  primary: secondary,
  secondary: primary,
});

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props: IButton) => (props.header ? "15px 31px" : "20px 39px")};
  font-size: ${(props: IButton) => (props.header ? "14px" : "16px")};
  line-height: ${(props: IButton) => (props.header ? "14px" : "16px")};
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};
  border: 2px solid ${accentBlue};
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.secondary};
  }
`;

export { ButtonStyled, theme, invertTheme };
