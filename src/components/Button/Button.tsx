import { ButtonStyled } from "./Button.styled";

const Button = ({
  actionButton = false,
  children = "",
  onClick = () => null,
}) => {
  return (
    <ButtonStyled actionButton={actionButton} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
