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
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <ContainerS>
      <WrapperPrimaryS>
        <Logo />
        <WrapperSecondaryS>
          <ContactUs />
          <Button header aria-label={t("description.button")}>
            {t("description.headerButton")}
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
