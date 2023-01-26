import benefits from "../../data/benefits-list.json" assert { type: "json" };
import aboutImg from "../../images/about-desktop.jpg";
import aboutMiniImg from "../../images/about-mini-desktop.jpg";
import ListWithIcons from "../ListWithIcons";
import Button from "../Button";
import {
  Section,
  Wrapper,
  WrapperImg,
  WrapperImgPrimary,
  WrapperImgSecondary,
  TitlePrimary,
  TitleSecondary,
  Text,
} from "./AboutUs.styled";

const AboutUs = () => {
  return (
    <Section>
      <Wrapper>
        <WrapperImg>
          <WrapperImgPrimary>
            <img src={aboutImg} alt="doctor" />
          </WrapperImgPrimary>
          <WrapperImgSecondary>
            <img src={aboutMiniImg} alt="doctor" />
          </WrapperImgSecondary>
        </WrapperImg>
        <div>
          <TitlePrimary id="about us">About MedicaLife</TitlePrimary>
          <TitleSecondary>
            We Provide Essential Services <br />
            For Your Health Care
          </TitleSecondary>
          <Text>
            With a robust offering of services and specialties, you and your
            whole family can get the care you need. From everyday needs and
            acute care to supportive services and opportunities for a healthy,
            active lifestyle, we have you covered.
          </Text>
          <ListWithIcons items={benefits} />
          <Text pseudo>
            We really know the true needs and expectations of patients
          </Text>
          <Button>Contact Us</Button>
        </div>
      </Wrapper>
    </Section>
  );
};

export default AboutUs;
