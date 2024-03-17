import styled from 'styled-components';
import { variables, mixins } from '../../helpers';

const { colors, buttonRadius } = variables;
const{ flex, focus } = mixins;

const theme = {
  defaults: {
    geometry: '20px 40px',
    font: '16px',
    color: colors.accentBlue
  },
  accent: {
    geometry: '15px 30px',
    font: '14px',
    color: colors.accentWhite
  },
};

const invertTheme = ({ defaults, accent } = theme) => ({
  defaults: accent,
  accent: defaults
});

const Knob = styled.button`
  ${flex('row', 'center', 'center')}

  padding: ${({ theme }) => theme.defaults.geometry};
  font-size:  ${({ theme }) => theme.defaults.font};
  color: ${colors.accentWhite};
  background-color: ${colors.accentBlue};
  border: 2px solid ${colors.accentBlue};
  border-radius: ${buttonRadius};
  cursor: pointer;

  &:hover {
    color: ${colors.accentBlue};
    background-color: ${colors.accentWhite};
  }

  &:focus {
    ${focus(buttonRadius)}
  }
`;

export { Knob, theme, invertTheme };
