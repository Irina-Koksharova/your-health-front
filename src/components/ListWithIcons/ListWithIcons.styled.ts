import styled from "styled-components";
import { colors } from "../../helpers/css-helper";

const { accentBlue, primary } = colors;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 220px;
  margin: 0 0 30px;
`;

const Item = styled.li`
  display: flex;
  width: calc((100% - 20px) / 2);
  height: calc((100% - 20px) / 2);
  margin: 0 20px 0 0;

  &:nth-child(n + 3) {
    margin: 0;
  }
`;

const WrapperIcon = styled.div`
  margin: 0 14px 0 0;
`;

const Path = styled.path`
  fill: ${accentBlue};
`;

const Title = styled.h4`
  margin: 0 0 10px;
  line-height: 19px;
`;

const Text = styled.p`
  margin: 0;
  line-height: 24px;
  color: ${primary};
`;

export { List, Item, WrapperIcon, Path, Title, Text };
