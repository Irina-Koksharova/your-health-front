import styled from "styled-components";
import { IAboutUs } from "../../interfaces/AboutUs.interface";
import { colors } from "../../helpers/css-helper";
import mark from "../../images/mark.svg";

const { accentBlue, primary } = colors;

const SectionS = styled.section`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  padding: 170px 0 160px;
`;

const WrapperImgS = styled.div`
  position: relative;
  width: 518px;
  height: 628px;
  margin: 0 109px 0 0;
`;

const WrapperImgPrimaryS = styled.div`
  position: relative;
  width: 487px;
  height: 611px;

  &:after {
    content: "";
    position: absolute;
    top: 35px;
    left: 45px;
    display: block;
    width: 475px;
    height: 595px;
    background: ${accentBlue};
    border-radius: 20px;
    z-index: -1;
  }
`;

const WrapperImgSecondaryS = styled.div`
  position: absolute;
  bottom: 10px;
  width: 285px;
  height: 220px;
`;

const TitlePrimaryS = styled.h2`
  margin: 0 0 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  color: ${accentBlue};
`;

const TitleSecondaryS = styled.h3`
  margin: 0 0 20px;
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
`;

const TextS = styled.p`
  margin: 0 0 30px;
  line-height: 24px;
  color: ${primary};

  &:before {
    content: ${(props: IAboutUs) => (props.pseudo ? `url(${mark})` : "")};
    margin: 0 14px 0 0;
  }
`;

const svgStyle = {
  width: "40px",
  height: "40px",
  fill: `${accentBlue}`,
};

export {
  SectionS,
  WrapperImgS,
  WrapperImgPrimaryS,
  WrapperImgSecondaryS,
  TitlePrimaryS,
  TitleSecondaryS,
  TextS,
  svgStyle,
};
