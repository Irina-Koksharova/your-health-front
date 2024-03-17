import { useTranslation } from 'react-i18next';
import {useContactType, useSvgStyle} from '../../hooks';
import contacts from '../../data/contact-us.json' assert { type: 'json' };
import { variables } from '../../helpers';
import SvgUse from '../SvgUse';
import { List, Item, Container, Text, Link } from './styles';

const ContactUs = () => {
  const { t } = useTranslation();
  const getContactType = useContactType();
  const getSvgStyle = useSvgStyle();
  const { colors } = variables;

  return (
    <List>
      {contacts &&
        contacts.map(({ type, title, text, icon }) => (
          <Item key={text}>
            <SvgUse style={getSvgStyle(30, 30, colors.accentWhite)} icon={icon} />
            <Container>
              <Text>{t(`description.${type}`)}</Text>
              <Link
                href={getContactType(type, title)}
                aria-label={`${t(`description.${type}`)}`}
              >
                {text}
              </Link>
            </Container>
          </Item>
        ))}
    </List>
  );
};

export default ContactUs;
