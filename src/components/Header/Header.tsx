import SocialLinks from "../SocialLinks";
import ContactUs from "../ContactUs";
import Button from "../Button";
import { ContainerStyled, WrapperStyled } from "./Header.styled";

const Header = () => {
  return (
    <ContainerStyled>
      <WrapperStyled>
        <ContactUs />
        <Button actionButton>Make Appointment</Button>
      </WrapperStyled>
      <SocialLinks header />
    </ContainerStyled>
  );
};

export default Header;
