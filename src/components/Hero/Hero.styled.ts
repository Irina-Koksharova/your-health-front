import styled from "styled-components";
import banner from "../../images/hero-desktop.jpg";
import { colors } from "../../helpers/css-helper";

const { secondary } = colors;

const SectionS = styled.section`
  display: flex;
  align-items: center;
  height: 727px;
  background-image: url(${banner});
`;

const WrapperS = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const TitleS = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -1px;
  color: ${secondary};
`;

const TextS = styled.p`
  margin: 0 0 30px;
  line-height: 24px;
`;

export { SectionS, WrapperS, TitleS, TextS };
