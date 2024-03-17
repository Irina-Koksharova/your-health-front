import styled from "styled-components";
import { variables, mixins } from "../../helpers";

const { colors, iconRadius } = variables;
const { flex, hover, focus } = mixins;

const Button = styled.button`
  position: fixed;
  bottom: 60px;
  right: 30px;

  ${flex('row', "center", "center")}

  width: 60px;
  height: 60px;
  border: 2px solid ${colors.accentBlue};
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

export { Button, iconStyles };
