import Sprite from "../../images/svg-sprite.svg";
import { ISvgUse } from "../../interfaces/SvgUse.interface";

const SvgUse = ({ style, icon }: ISvgUse) => {
  return (
    <svg style={style}>
      <use href={`${Sprite}#${icon}`}></use>
    </svg>
  );
};

export default SvgUse;
