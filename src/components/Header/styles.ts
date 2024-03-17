import styled from 'styled-components';
import { variables, mixins } from '../../helpers';
import { breakpoints } from '../../breakpoints/breakpoints';

const { colors } = variables;
const { flex } = mixins;
const { primary } = breakpoints;

const Container = styled.div`
  ${flex('column', 'space-between')};
  width: calc(${primary.desktop * 0.8}px);
  height: 120px;
  margin: 0 auto;

  color: ${colors.accentWhite};
`;

const Wrapper = styled.div`
  ${flex('row', 'space-between', 'center')};
`;

const ExtendedWrapper = styled(Wrapper)`
  width: calc(${primary.desktop * 0.6}px);
`;

export { Container, Wrapper, ExtendedWrapper };
