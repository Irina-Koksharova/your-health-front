import styled from "styled-components";
import { colors, iconRadius } from "../../helpers/variables";
import { flex, hover, focus } from "../../helpers/mixins";

const { accentBlue } = colors;

const ButtonStyled = styled.button`
  position: fixed;
  bottom: 60px;
  right: 30px;

  ${flex("center", "center")}

  width: 60px;
  height: 60px;
  border: 2px solid ${accentBlue};
  border-radius: ${iconRadius};

  &:hover {
    ${hover(1.02)}
  }

  &:focus {
    ${focus(iconRadius)}
  }
`;

const iconStyles = {
  size: "2em",
};

export { ButtonStyled, iconStyles };
