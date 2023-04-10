import styled from "styled-components";
import { colors } from "../../helpers/variables";
import { flex, focus } from "../../helpers/mixins";

const { accentBlue, primary } = colors;

const NavS = styled.nav`
  color: ${primary};
`;

const ListS = styled.ul`
  ${flex("space-between", "center")}

  width: 793px;
`;

const LinkS = styled.a`
  display: block;
  padding: 10px;
  font-size: 14px;
  line-height: 13px;
  color: inherit;
  text-transform: uppercase;

  &:hover {
    color: ${accentBlue};
  }

  &:focus {
    ${focus()}
  }
`;

export { NavS, ListS, LinkS };
