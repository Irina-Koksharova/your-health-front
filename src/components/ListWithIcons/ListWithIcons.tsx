import { IListWithIcons } from "../../interfaces/ListWithIcons.interface";
import SvgUse from "../SvgUse";
import {
  ListS,
  ItemS,
  WrapperIconS,
  TitleS,
  TextS,
} from "./ListWithIcons.styled";

const ListWithIcons = ({ items, style, column }: IListWithIcons) => {
  return (
    <ListS column={column}>
      {items.map(({ title, text, icon }) => (
        <ItemS key={title} column={column}>
          <WrapperIconS>
            <SvgUse style={style} icon={icon} />
          </WrapperIconS>
          <div>
            <TitleS>{title}</TitleS>
            <TextS>{text}</TextS>
          </div>
        </ItemS>
      ))}
    </ListS>
  );
};

export default ListWithIcons;
