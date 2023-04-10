import styled from "styled-components";
import { colors } from "../../helpers/variables";
import { flex } from "../../helpers/mixins";

const { primary } = colors;

const SectionS = styled.section`
  ${flex("space-between", "stretch")}

  width: 1200px;
  margin: 0 auto;
  padding: 167px 0 173px;
`;

const WrapperTextS = styled.div`
  width: 40%;
`;

const TitleS = styled.h3`
  margin: 0 0 22px 0;
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
`;

const TextS = styled.p`
  font-size: 15px;
  margin: 0 0 38px 0;
  line-height: 24px;
  color: ${primary};
`;

const svgStyle = {
  width: "59px",
  height: "59px",
};

export { SectionS, WrapperTextS, TitleS, TextS, svgStyle };
