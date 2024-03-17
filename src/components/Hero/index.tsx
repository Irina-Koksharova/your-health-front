import Button from '../Button';
import { SectionS, WrapperS, TitleS, TextS } from './styles';

const Hero = () => {
  return (
    <SectionS>
      <WrapperS>
        <TitleS>
          Best Medical & <br /> Healthcare Service <br /> For Your Family
        </TitleS>
        <TextS>
          We have built a healthcare system where you come first. <br />
          Because nothing is more important than your and your family’s health.
        </TextS>
        <Button isDefault>Contact Us</Button>
      </WrapperS>
    </SectionS>
  );
};

export default Hero;
