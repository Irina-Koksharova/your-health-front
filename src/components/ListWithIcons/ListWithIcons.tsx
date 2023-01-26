import { namespace } from "../../helpers/svg-helper";
import { IListWithIcons } from "../../interfaces/ListWithIcons.interface";
import {
  List,
  Item,
  WrapperIcon,
  Path,
  Title,
  Text,
} from "./ListWithIcons.styled";

const ListWithIcons = ({ items }: IListWithIcons) => {
  return (
    <List>
      {items.map(({ title, text, path, viewBox, width, height }) => (
        <Item key={title}>
          <WrapperIcon>
            <svg
              xmlns={namespace}
              viewBox={viewBox}
              width={width}
              height={height}
            >
              {path.map((item) => (
                <Path key={item} d={item} />
              ))}
            </svg>
          </WrapperIcon>
          <div>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </div>
        </Item>
      ))}
    </List>
  );
};

export default ListWithIcons;
