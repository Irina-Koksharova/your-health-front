import SocialLinks from "../SocialLinks";
import ContactUs from "../ContactUs";
import { ContainerStyled } from "./Header.styled";

const Header = () => {
  return (
    <ContainerStyled>
      <SocialLinks header />
      <ContactUs />
    </ContainerStyled>
  );
};

export default Header;
