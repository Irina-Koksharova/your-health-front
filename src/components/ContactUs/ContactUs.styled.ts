import styled from "styled-components";
import { colors } from "../../helpers/css-variables";

const ListStyled = styled.ul`
  display: flex;
`;

const ItemStyled = styled.li`
  display: flex;
  align-items: center;
`;

const PathStyled = styled.path`
  fill: ${colors.accentBlue};
`;

const SvgStyled = styled.svg`
  margin-right: 15px;
`;

const WrapperStyled = styled.div`
  color: ${colors.primary};
`;

const TextStyled = styled.p`
  margin-bottom: 0;
  line-height: 19px;
`;

const LinkStyled = styled.a`
  color: inherit;
  line-height: 24px;

  &:hover {
    color: ${colors.accentBlue};
  }
`;

export {
  ListStyled,
  ItemStyled,
  PathStyled,
  SvgStyled,
  WrapperStyled,
  TextStyled,
  LinkStyled,
};
