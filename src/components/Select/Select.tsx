import { AiOutlineDown } from "react-icons/ai";
import { colors } from "../../helpers/variables";
import SvgUse from "../SvgUse";
import {
  WrapperS,
  ContainerS,
  LabelS,
  ButtonS,
  ListS,
  ItemS,
  TextS,
  svgStyle,
} from "./Select.styled";

const Select = () => {
  const { accentBlue } = colors;

  return (
    <WrapperS aria-labelledby="language" tabIndex={0}>
      <ContainerS>
        <LabelS id="language">language</LabelS>
        <ButtonS
          role="button"
          aria-label="select language"
          aria-controls="options"
          aria-expanded="false"
          tabIndex={0}
        >
          <AiOutlineDown color={accentBlue} />
        </ButtonS>
      </ContainerS>
      <ListS id="options" role="listbox" aria-label="select language">
        <ItemS
          role="option"
          aria-label="english"
          aria-selected="true"
          tabIndex={0}
        >
          <SvgUse style={svgStyle} icon="icon-flag-gb" />
          <TextS>en</TextS>
        </ItemS>
        <ItemS
          role="option"
          aria-label="ukrainian"
          aria-selected="false"
          tabIndex={-1}
        >
          <SvgUse style={svgStyle} icon="icon-flag-ua" />
          <TextS>ua</TextS>
        </ItemS>
      </ListS>
    </WrapperS>
  );
};

export default Select;
