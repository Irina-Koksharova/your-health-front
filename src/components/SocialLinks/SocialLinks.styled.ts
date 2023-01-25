import styled from "styled-components";
import { colors } from "../../helpers/css-helper";

interface Props {
  header?: boolean;
}

const { accentBlue, accentWhite } = colors;

const ListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  width: ${(props: Props) => (props.header ? "169px" : "200px")};

  > li {
    width: ${(props: Props) => (props.header ? "31px" : "32px")};
    height: ${(props: Props) => (props.header ? "31px" : "32px")};
  }

  a {
    background-color: ${(props: Props) =>
      props.header ? `${accentBlue}` : `${accentWhite}`};
  }

  svg {
    width: 15px;
    height: 15px;
    fill: ${(props: Props) =>
      props.header ? `${accentWhite}` : `${accentBlue}`};
  }
`;

export { ListStyled };
