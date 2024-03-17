import styled from 'styled-components';
import { variables, mixins } from '../../helpers';

const { colors } = variables;
const { flex, focus } = mixins;

const List = styled.ul`
  ${flex('row', 'space-between', 'center')}
`;

const Item = styled.li`
  margin: 0 40px 0 0;

  &:last-child {
    margin: 0;
  }
`;

const Link = styled.a`
  display: block;
  padding: 10px;
  font-size: 18px;
  line-height: 13px;
  text-transform: uppercase;

  &:hover {
    color: ${colors.accentBlue};
  }

  &:focus {
    ${focus()}
  }
`;

export { List, Item, Link };
