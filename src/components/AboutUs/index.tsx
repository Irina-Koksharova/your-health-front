import { useSvgStyle } from '../../hooks';
import { variables } from '../../helpers';
import benefits from '../../data/benefits-list.json' assert { type: 'json' };
import Image from '../../images/about-desktop.jpg';
import ImageMini from '../../images/about-mini-desktop.jpg';
import ListWithIcons from '../ListWithIcons';
import Button from '../Button';
import {
  SectionS,
  WrapperImgS,
  WrapperImgPrimaryS,
  WrapperImgSecondaryS,
  TitlePrimaryS,
  TitleSecondaryS,
  TextS,
} from './styles';

const AboutUs = () => {
  const getSvgStyle = useSvgStyle();
  const { colors } = variables;

  return (
    <SectionS>
      <WrapperImgS>
        <WrapperImgPrimaryS>
          <img src={Image} alt='doctor' />
        </WrapperImgPrimaryS>
        <WrapperImgSecondaryS>
          <img src={ImageMini} alt='doctor' />
        </WrapperImgSecondaryS>
      </WrapperImgS>
      <div>
        <TitlePrimaryS id='about us'>About MedicaLife</TitlePrimaryS>
        <TitleSecondaryS>
          We Provide Essential Services <br />
          For Your Health Care
        </TitleSecondaryS>
        <TextS>
          With a robust offering of services and specialties, you and your whole
          family can get the care you need. From everyday needs and acute care
          to supportive services and opportunities for a healthy, active
          lifestyle, we have you covered.
        </TextS>
        <ListWithIcons
          items={benefits}
          style={getSvgStyle(40, 40, colors.accentBlue)}
          column
        />
        <TextS pseudo>
          We really know the true needs and expectations of patients
        </TextS>
        <Button isDefault>Contact Us</Button>
      </div>
    </SectionS>
  );
};

export default AboutUs;
