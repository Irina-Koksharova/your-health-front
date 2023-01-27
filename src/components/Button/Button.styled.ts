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

const ButtonS = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ header }: IButton) => (header ? "15px 31px" : "20px 39px")};
  font-size: ${({ header }: IButton) => (header ? "14px" : "16px")};
  line-height: ${({ header }: IButton) => (header ? "14px" : "16px")};
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${accentBlue};
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export { ButtonS, theme, invertTheme };
