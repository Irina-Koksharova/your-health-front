import styled from 'styled-components';
import { variables, mixins } from '../../helpers';

const { colors } = variables;
const { flex } = mixins;

const SectionS = styled.section`
  ${flex('row', 'flex-start', 'center')}

  height: 727px;
`;

const WrapperS = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const TitleS = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -1px;
  color: ${colors.accentWhite};
`;

const TextS = styled.p`
  margin: 0 0 30px;
  line-height: 24px;
`;

export { SectionS, WrapperS, TitleS, TextS };
