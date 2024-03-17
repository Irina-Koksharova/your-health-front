import steps from '../../data/how-it-works.json' assert { type: 'json' };
import { variables } from '../../helpers';
import { useSvgStyle } from '../../hooks';
import Image from '../../images/how-it-works-desktop.jpg';
import ListWithIcons from '../ListWithIcons';
import { SectionS, WrapperTextS, TitleS, TextS } from './styles';

const HowItWorks = () => {
  const getSvgStyle = useSvgStyle();
  const { colors } = variables;

  return (
    <SectionS>
      <WrapperTextS>
        <TitleS>How It Works</TitleS>
        <TextS>
          We guarantee all of our members extraordinary coverage, treatment and
          the best medical attention anytime. We don’t just point you in the
          right direction. We walk with you on your journey.
        </TextS>
        <ListWithIcons items={steps} style={getSvgStyle(60, 60, colors.accentBlue)} />
      </WrapperTextS>
      <div>
        <img src={Image} alt='doctor' />
      </div>
    </SectionS>
  );
};

export default HowItWorks;
