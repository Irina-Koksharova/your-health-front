import styled from "styled-components";
import { colors } from "../../helpers/variables";
import { flex, focus } from "../../helpers/mixins";

const { accentBlue } = colors;

const WrapperS = styled.div`
  position: relative;
  width: 90px;
  margin: 0 0 100px 10px;
  padding: 5px;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    ${focus()}
  }
`;

const ContainerS = styled.div`
  ${flex("space-between", "center")}

  width: 80px;
  padding: 5px;
  border: 2px solid ${accentBlue};
  border-radius: 3px;
`;

const LabelS = styled.span`
  height: 20px;
  margin: 0;
  letter-spacing: -0.15em;
  visibility: hidden;
`;

const ButtonS = styled.button`
  ${flex("flex-start", "center")}
`;

const ListS = styled.div`
  position: absolute;
  top: 11px;
  left: 7px;
  width: 50px;
  padding: 0 0 0 7px;
`;

const ItemS = styled.div`
  ${flex("space-between", "center")}

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

const TextS = styled.span`
  margin: 0;
`;

const svgStyle = {
  width: "20px",
  height: "20px",
};

export { WrapperS, ContainerS, LabelS, ButtonS, ListS, ItemS, TextS, svgStyle };
