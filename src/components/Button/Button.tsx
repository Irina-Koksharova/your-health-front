import { ThemeProvider } from "styled-components";
import { IButton } from "../../interfaces/Button.interface";
import { ButtonStyled, theme, invertTheme } from "./Button.styled";

const Button = (props: IButton) => {
  return (
    <ThemeProvider theme={props.hero ? invertTheme : theme}>
      <ButtonStyled header={props.header} onClick={props.onClick}>
        {props.children}
      </ButtonStyled>
    </ThemeProvider>
  );
};

export default Button;
