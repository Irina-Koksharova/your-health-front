import styled from 'styled-components';
import { breakpoints } from '../../breakpoints/breakpoints';

const { primary } = breakpoints;

const Wrapper = styled.div`
  max-width: ${primary.mobile}px;
  margin: 0px auto;
  padding: 50px 0 0;

  @media screen and (min-width: ${primary.tablet}px) {
    max-width: ${primary.tablet}px;
  }

  @media screen and (min-width: ${primary.desktop}px) {
    max-width: ${primary.desktop}px;
  }
`;

export { Wrapper };
