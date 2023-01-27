import { ThemeProvider } from "styled-components";
import { IButton } from "../../interfaces/Button.interface";
import { ButtonS, theme, invertTheme } from "./Button.styled";

const Button = ({ hero, header, onClick, children }: IButton) => {
  return (
    <ThemeProvider theme={hero ? invertTheme : theme}>
      <ButtonS header={header} onClick={onClick}>
        {children}
      </ButtonS>
    </ThemeProvider>
  );
};

export default Button;
