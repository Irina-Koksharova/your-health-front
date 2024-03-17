import styled from 'styled-components';
import { mixins } from '../../helpers';

const { focus } = mixins;

const Link = styled.a`
  display: block;
  padding: 5px;
  font-size: 44px;

  &:focus {
    ${focus()}
  }
`;

export { Link };
