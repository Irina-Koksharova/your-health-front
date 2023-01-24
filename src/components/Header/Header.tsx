import { ContainerStyled } from "./Header.styled";
import SocialLinks from "../SocialLinks/SocialLinks";

const Header = () => {
  return (
    <ContainerStyled>
      <SocialLinks header />
    </ContainerStyled>
  );
};

export default Header;
