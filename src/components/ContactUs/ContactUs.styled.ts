import styled from "styled-components";
import { colors } from "../../helpers/css-helper";

const { accentBlue, primary } = colors;

const ListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 417px;
`;

const ItemStyled = styled.li`
  display: flex;
  align-items: center;
`;

const PathStyled = styled.path`
  fill: ${accentBlue};
`;

const SvgStyled = styled.svg`
  margin-right: 15px;
`;

const WrapperStyled = styled.div`
  color: ${primary};
`;

const TextStyled = styled.p`
  margin-bottom: 0;
  line-height: 19px;
`;

const LinkStyled = styled.a`
  display: block;
  color: inherit;
  line-height: 24px;

  &:hover {
    color: ${accentBlue};
    transform: scale(1.01);
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
