import styled from "styled-components";
import { IList } from "../../interfaces/ListWithIcons.interface";
import { colors } from "../../helpers/variables";

const { primary } = colors;

const ListS = styled.ul`
  display: ${({ column }: IList) => (column ? "flex" : "block")};
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: ${({ column }: IList) => (column ? "220px" : "none")};
  margin: ${({ column }: IList) => (column ? "0 0 30px" : "0")};
`;

const ItemS = styled.li`
  display: flex;
  width: ${({ column }: IList) =>
    column ? "calc((100% - 20px) / 2)" : "100%"};
  height: ${({ column }: IList) =>
    column ? "calc((100% - 20px) / 2)" : "none"};
  margin: ${({ column }: IList) => (column ? "0 20px 0 0" : "0 0 35px 0")};

  &:nth-child(n + 3) {
    margin: 0;
  }
`;

const WrapperIconS = styled.div`
  margin: 0 14px 0 0;
`;

const TitleS = styled.h4`
  margin: 0 0 10px;
  line-height: 19px;
`;

const TextS = styled.p`
  margin: 0;
  line-height: 24px;
  color: ${primary};
`;

export { ListS, ItemS, WrapperIconS, TitleS, TextS };
