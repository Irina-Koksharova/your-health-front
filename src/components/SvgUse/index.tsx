import Sprite from '../../images/svg-sprite.svg';
import { ISvgUse } from '../../interfaces';

const SvgUse = ({ style, icon, dataRole, dataValue }: ISvgUse) => (
  <svg style={style} data-role={dataRole} data-value={dataValue}>
    <use
      href={`${Sprite}#${icon}`}
      data-role={dataRole}
      data-value={dataValue}
    />
  </svg>
);

export default SvgUse;
