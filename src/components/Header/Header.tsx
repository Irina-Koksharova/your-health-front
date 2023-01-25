import Logo from "../Logo";
import ContactUs from "../ContactUs";
import Button from "../Button";
import Navigation from "../Navigation";
import SocialLinks from "../SocialLinks";
import {
  ContainerStyled,
  WrapperPrimaryStyled,
  WrapperSecondaryStyled,
} from "./Header.styled";

const Header = () => {
  return (
    <ContainerStyled>
      <WrapperPrimaryStyled>
        <Logo />
        <WrapperSecondaryStyled>
          <ContactUs />
          <Button actionButton>Make Appointment</Button>
        </WrapperSecondaryStyled>
      </WrapperPrimaryStyled>
      <WrapperPrimaryStyled>
        <Navigation />
        <SocialLinks header />
      </WrapperPrimaryStyled>
    </ContainerStyled>
  );
};

export default Header;
