import styled from 'styled-components';
import { variables, mixins } from '../../helpers';

const { colors } = variables;
const { flex, focus } = mixins;

const List = styled.ul`
  ${flex('row', 'space-between')};
  width: 50%;
`;

const Item = styled.li`
  ${flex('row', 'space-around', 'center')};
  font-size: 14px;
`;

const Container = styled.div`
  margin: 0 0 0 15px;
`;

const Text = styled.p`
  margin: 0 0 5px 0;
`;

const Link = styled.a`
  &:hover {
    color: ${colors.accentBlue};
  }

  &:focus {
    padding: 6px 7px 6px 8px;
    font-size: 14px;
    line-height: 12px;
    ${focus()}
  }
`;

export { List, Item, Container, Text, Link };
