import styled from "styled-components";
import { ISocialLinks } from "../../interfaces/SocialLinks.interface";
import { colors } from "../../helpers/variables";
import { flex } from "../../helpers/mixins";

const { accentBlue, accentWhite } = colors;

const ListS = styled.ul`
  ${flex("space-between", "stretch")}

  width: ${({ header }: ISocialLinks) => (header ? "169px" : "200px")};

  > li {
    width: ${({ header }: ISocialLinks) => (header ? "31px" : "35px")};
    height: ${({ header }: ISocialLinks) => (header ? "31px" : "35px")};
  }

  a {
    background-color: ${({ header }: ISocialLinks) =>
      header ? `${accentWhite}` : `${accentBlue}`};
  }

  svg {
    width: 32px;
    height: 32px;
    fill: ${({ header }: ISocialLinks) =>
      header ? `${accentBlue}` : `${accentWhite}`};
  }
`;

export { ListS };
