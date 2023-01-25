import styled from "styled-components";

const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;

  &:hover {
    transform: scale(1.05);
  }
`;

export { LinkStyled };
