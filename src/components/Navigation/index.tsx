import { useTranslation } from 'react-i18next';
import links from '../../data/navigation-links.json' assert { type: 'json' };
import { List, Item, Link } from './styles';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <List>
        {links &&
          links.map((link) => (
            <Item key={link}>
              <Link
                href={`#${link}`}
                aria-label={`${t(`description.navigation.${link}`)}`}
                tabIndex={0}
              >
                {`${t(`description.navigation.${link}`)}`}
              </Link>
            </Item>
          ))}
      </List>
    </nav>
  );
};

export default Navigation;
