import { useTranslation } from 'react-i18next';
import { NAME } from '../../constants';
import { Link } from './styles';

const Logo = () => {
  const { t } = useTranslation();

  return (
    <Link href='/' aria-label={`${t('description.logo')}`}>
      {NAME}
    </Link>
  );
};

export default Logo;
