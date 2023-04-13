import Sprite from "../../images/svg-sprite.svg";
import { ISvgUse } from "../../interfaces/SvgUse.interface";

const SvgUse = ({ style, icon, dataRole, dataValue }: ISvgUse) => {
  return (
    <svg style={style} data-role={dataRole} data-value={dataValue}>
      <use
        href={`${Sprite}#${icon}`}
        data-role={dataRole}
        data-value={dataValue}
      ></use>
    </svg>
  );
};

export default SvgUse;
