import styled from "styled-components";
import { ISocialLinks } from "../../interfaces";
import { variables, mixins } from "../../helpers";

const { colors } = variables;
const { flex } = mixins;

const ListS = styled.ul`
  ${flex('row', "space-between", "stretch")}

  width: ${({ header }: ISocialLinks) => (header ? "169px" : "200px")};

  > li {
    width: ${({ header }: ISocialLinks) => (header ? "31px" : "35px")};
    height: ${({ header }: ISocialLinks) => (header ? "31px" : "35px")};
  }

  a {
    background-color: ${({ header }: ISocialLinks) =>
      header ? `${colors.accentWhite}` : `${colors.accentBlue}`};
  }

  svg {
    width: 32px;
    height: 32px;
    fill: ${({ header }: ISocialLinks) =>
      header ? `${colors.accentBlue}` : `${colors.accentWhite}`};
  }
`;

export { ListS };
