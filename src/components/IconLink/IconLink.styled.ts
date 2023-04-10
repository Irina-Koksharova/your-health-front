import styled from "styled-components";
import { iconRadius } from "../../helpers/variables";
import { flex, hover, focus } from "../../helpers/mixins";

const LinkS = styled.a`
  ${flex("center", "center")}

  height: 100%;
  border-radius: ${iconRadius};

  &:hover {
    ${hover(1.05)}
  }

  &:focus {
    ${focus(iconRadius)}
  }
`;

export { LinkS };
