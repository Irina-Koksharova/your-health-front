import styled from "styled-components";
import { colors } from "../../helpers/css-helper";

const { accentBlue, primary } = colors;

const NavStyled = styled.nav`
  color: ${primary};
`;

const ListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 793px;
`;

const LinkStyled = styled.a`
  display: block;
  padding: 10px;
  font-size: 14px;
  line-height: 13px;
  color: inherit;
  text-transform: uppercase;

  &:hover {
    color: ${accentBlue};
    transform: scale(1.05);
  }
`;

export { NavStyled, ListStyled, LinkStyled };
