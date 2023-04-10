import Logo from "../Logo";
import ContactUs from "../ContactUs";
import Button from "../Button";
import Navigation from "../Navigation";
import SocialLinks from "../SocialLinks";
import {
  ContainerS,
  WrapperPrimaryS,
  WrapperSecondaryS,
} from "./Header.styled";

const Header = () => {
  return (
    <ContainerS>
      <WrapperPrimaryS>
        <Logo />
        <WrapperSecondaryS>
          <ContactUs />
          <Button header aria-label="Make Appointment">
            Make Appointment
          </Button>
        </WrapperSecondaryS>
      </WrapperPrimaryS>
      <WrapperPrimaryS>
        <Navigation />
        <SocialLinks header />
      </WrapperPrimaryS>
    </ContainerS>
  );
};

export default Header;
