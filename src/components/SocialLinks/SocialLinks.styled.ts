import styled from "styled-components";

interface Props {
  header?: boolean;
}

const ListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  width: ${(props: Props) => (props.header ? "169px" : "200px")};

  > li {
    width: ${(props: Props) => (props.header ? "31px" : "32px")};
    height: ${(props: Props) => (props.header ? "31px" : "32px")};
  }

  a {
    background-color: ${(props: Props) =>
      props.header ? "#0067FF" : "#FFFFFF"};
  }

  svg {
    width: 15px;
    height: 15px;
    fill: ${(props: Props) => (props.header ? "#FFFFFF" : "#0067FF")};
  }
`;

export { ListStyled };
