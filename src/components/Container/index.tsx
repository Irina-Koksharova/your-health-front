import { IContainer } from '../../interfaces';
import { Wrapper } from './styles';

const Container = ({ children }: IContainer) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
