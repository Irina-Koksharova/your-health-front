import { KeyboardEvent } from "react";
import { AiOutlineUp } from "react-icons/ai";
import { colors } from "../../helpers/variables";
import { ButtonStyled, iconStyles } from "./ButtonUp.styled";

const ButtonUp = () => {
  const { size } = iconStyles;
  const { accentBlue } = colors;

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <ButtonStyled
      aria-label="scroll up"
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <AiOutlineUp size={size} color={accentBlue} />
    </ButtonStyled>
  );
};

export default ButtonUp;
