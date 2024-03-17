import { useTranslation } from 'react-i18next';
import Logo from '../Logo';
import ContactUs from '../ContactUs';
import Button from '../Button';
import Navigation from '../Navigation';
import SocialLinks from '../SocialLinks';
import Select from '../Select';
import { Container, Wrapper, ExtendedWrapper } from './styles';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Logo />
        <ExtendedWrapper>
          <ContactUs />
          <Select />
          <Button aria-label={t('description.appointment')}>
            {t('description.appointment')}
          </Button>
        </ExtendedWrapper>
      </Wrapper>
      <Wrapper>
        <Navigation />
        <SocialLinks header />
      </Wrapper>
    </Container>
  );
};

export default Header;
