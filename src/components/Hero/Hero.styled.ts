import styled from "styled-components";
import banner from "../../images/hero-banner.jpg";
import { colors } from "../../helpers/css-helper";

const { secondary } = colors;

const SectionStyled = styled.section`
  display: flex;
  align-items: center;
  height: 727px;
  background-image: url(${banner});
`;

const WrapperStyled = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const TitleStyled = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -1px;
  color: ${secondary};
`;

const TextStyled = styled.p`
  margin: 0 0 30px;
  line-height: 24px;
`;

export { SectionStyled, WrapperStyled, TitleStyled, TextStyled };
