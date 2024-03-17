import styled from 'styled-components';
import { variables, mixins } from '../../helpers';

const { iconRadius } = variables;
const { flex, hover, focus } = mixins;

const LinkS = styled.a`
  ${flex('row', 'center', 'center')}

  height: 100%;
  border-radius: ${iconRadius};

  &:hover {
    ${hover(1.05)}
  }

  &:focus {
    ${focus(iconRadius)}
  }
`;

export { LinkS };
