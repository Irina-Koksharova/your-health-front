import styled from "styled-components";
import { focus } from "../../helpers/mixins";

const LinkS = styled.a`
  display: block;
  padding: 5px;

  &:focus {
    ${focus()}
  }
`;

const WrapperS = styled.div`
  width: 202px;
  height: 46px;
`;

export { LinkS, WrapperS };
