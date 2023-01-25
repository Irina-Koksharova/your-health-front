import logo from "../../images/logo.jpg";
import { LinkStyled, WrapperStyled } from "./Logo.styled";

const Logo = () => {
  return (
    <LinkStyled href="/" aria-label="Logo">
      <WrapperStyled>
        <img src={logo} alt="Logo Medical Life" />
      </WrapperStyled>
    </LinkStyled>
  );
};

export default Logo;
