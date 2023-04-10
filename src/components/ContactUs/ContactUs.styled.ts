import styled from "styled-components";
import { colors } from "../../helpers/variables";
import { flex, hover, focus } from "../../helpers/mixins";

const { accentBlue, primary } = colors;

const ListS = styled.ul`
  ${flex("space-between", "stretch")}

  width: 417px;
`;

const ItemS = styled.li`
  ${flex("flex-start", "center")}
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
    ${hover(1.01)}

    color: ${accentBlue};
  }

  &:focus {
    padding: 6px 7px 6px 8px;
    font-size: 14px;
    line-height: 12px;
    ${focus()}
  }

  &:active {
    padding: 6px 7px 6px 8px;
    font-size: 14px;
    line-height: 12px;
    color: ${primary};
  }
`;

const svgStyle = {
  width: "31px",
  height: "31px",
  margin: "0 15px 0 0",
};

export { ListS, ItemS, WrapperS, TextS, LinkS, svgStyle };
