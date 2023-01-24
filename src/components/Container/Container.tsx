import { IContainer } from "../../interfaces/Container.interface";
import { ContainerStyled } from "./Container.styled";

const Container = (props: IContainer) => {
  return <ContainerStyled>{props.children}</ContainerStyled>;
};

export default Container;
