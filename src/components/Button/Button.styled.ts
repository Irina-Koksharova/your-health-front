import styled from "styled-components";
import { IButton } from "../../interfaces/Button.interface";
import { colors, buttonRadius } from "../../helpers/variables";
import { flex, focus } from "../../helpers/mixins";

const { accentBlue, accentWhite } = colors;

const theme = {
  primary: accentBlue,
  secondary: accentWhite,
};

const invertTheme = ({ primary, secondary } = theme) => ({
  primary: secondary,
  secondary: primary,
});

const ButtonS = styled.button`
  ${flex("center", "center")}

  padding: ${({ header }: IButton) => (header ? "15px 31px" : "20px 39px")};
  font-size: ${({ header }: IButton) => (header ? "14px" : "16px")};
  line-height: ${({ header }: IButton) => (header ? "14px" : "16px")};
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${accentBlue};
  border-radius: ${buttonRadius};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.secondary};
  }

  &:focus {
    ${focus(buttonRadius)}
  }
`;

export { ButtonS, theme, invertTheme };
