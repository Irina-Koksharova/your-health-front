import { KeyboardEvent } from "react";
import { AiOutlineUp } from "react-icons/ai";
import { variables } from "../../helpers";
import { Button, iconStyles } from "./styles";

const ButtonUp = () => {
  const { size } = iconStyles;
  const { colors } = variables;

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
    <Button
      aria-label="scroll up"
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <AiOutlineUp size={size} color={colors.accentBlue} />
    </Button>
  );
};

export default ButtonUp;
