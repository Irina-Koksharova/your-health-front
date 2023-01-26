import Button from "../Button";
import {
  SectionStyled,
  WrapperStyled,
  TitleStyled,
  TextStyled,
} from "./Hero.styled";

const Hero = () => {
  return (
    <SectionStyled>
      <WrapperStyled>
        <TitleStyled>
          Best Medical & <br /> Healthcare Service <br /> For Your Family
        </TitleStyled>
        <TextStyled>
          We have built a healthcare system where you come first. <br />
          Because nothing is more important than your and your family’s health.
        </TextStyled>
        <Button hero>Contact Us</Button>
      </WrapperStyled>
    </SectionStyled>
  );
};

export default Hero;
