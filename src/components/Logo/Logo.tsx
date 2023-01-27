import logo from "../../images/logo.jpg";
import { LinkS, WrapperS } from "./Logo.styled";

const Logo = () => {
  return (
    <LinkS href="/" aria-label="Logo">
      <WrapperS>
        <img src={logo} alt="Logo Medical Life" />
      </WrapperS>
    </LinkS>
  );
};

export default Logo;
