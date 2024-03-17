import { ThemeProvider } from 'styled-components';
import { IButton } from '../../interfaces';
import { Knob, theme, invertTheme } from './styles';

const Button = ({
  isDefault = false,
  onClick,
  children,
  ...allyProps
}: IButton) => (
  <ThemeProvider theme={isDefault ? theme : invertTheme}>
    <Knob onClick={onClick} {...allyProps}>
      {children}
    </Knob>
  </ThemeProvider>
);

export default Button;
