import styled from "styled-components";
import { colors } from "../../helpers/css-helper";

const { accentBlue, primary } = colors;

const ListS = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 417px;
`;

const ItemS = styled.li`
  display: flex;
  align-items: center;
`;

const WrapperS = styled.div`
  color: ${primary};
`;

const TextS = styled.p`
  margin: 0;
  line-height: 19px;
`;

const LinkS = styled.a`
  display: block;
  color: inherit;
  line-height: 24px;

  &:hover {
    color: ${accentBlue};
    transform: scale(1.01);
  }
`;

const svgStyle = {
  width: "31px",
  height: "31px",
  margin: "0 15px 0 0",
};

export { ListS, ItemS, WrapperS, TextS, LinkS, svgStyle };
