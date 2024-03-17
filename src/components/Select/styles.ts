import styled from "styled-components";
import { variables, mixins } from "../../helpers";

const { colors, buttonRadius } = variables;
const { flex, focus } = mixins;

const Wrapper = styled.div`
  position: relative;
  width: 90px;
  padding: 5px;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    ${focus()}
  }
`;

const Container = styled.div`
  ${flex('row', "space-between", "center")}

  width: 80px;
  padding: 5px;
  border: 2px solid ${colors.accentBlue};
  border-radius: ${buttonRadius};
`;

const Label = styled.span`
  height: 20px;
  margin: 0;
  letter-spacing: -0.15em;
  visibility: hidden;
`;

const Button= styled.button`
  ${flex('row', "flex-start", "center")}
`;

const List = styled.div`
  position: absolute;
  top: 11px;
  left: 7px;
  width: 50px;
  padding: 0 0 0 7px;
`;

const Item = styled.div`
  ${flex('row', "space-between", "center")}

  height: 20px;

  &:not(:last-child) {
    margin: 0 0 12px 0;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    padding: 2px;
    font-size: 14px;

    ${focus()}
  }
`;

const Text = styled.span`
  margin: 0;
`;

export { Wrapper, Container, Label, Button, List, Item, Text };
