import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";

const ContainerS = styled.div`
  max-width: ${breakpoints.primary.mobile}px;
  margin: 0px auto;
  padding: 50px 0 0;

  @media screen and (min-width: ${breakpoints.primary.tablet}px) {
    max-width: ${breakpoints.primary.tablet}px;
  }

  @media screen and (min-width: ${breakpoints.primary.desktop}px) {
    max-width: ${breakpoints.primary.desktop}px;
  }
`;

export { ContainerS };
