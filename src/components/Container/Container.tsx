import { IContainer } from "../../interfaces/Container.interface";
import { ContainerS } from "./Container.styled";

const Container = (props: IContainer) => {
  return <ContainerS>{props.children}</ContainerS>;
};

export default Container;
