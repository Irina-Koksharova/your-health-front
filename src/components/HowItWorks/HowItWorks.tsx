import steps from "../../data/how-it-works.json" assert { type: "json" };
import Image from "../../images/how-it-works-desktop.jpg";
import ListWithIcons from "../ListWithIcons";
import {
  SectionS,
  WrapperTextS,
  TitleS,
  TextS,
  svgStyle,
} from "./HowItWorks.styled";

const HowItWorks = () => {
  return (
    <SectionS>
      <WrapperTextS>
        <TitleS>How It Works</TitleS>
        <TextS>
          We guarantee all of our members extraordinary coverage, treatment and
          the best medical attention anytime. We don’t just point you in the
          right direction. We walk with you on your journey.
        </TextS>
        <ListWithIcons items={steps} style={svgStyle} />
      </WrapperTextS>
      <div>
        <img src={Image} alt="doctor" />
      </div>
    </SectionS>
  );
};

export default HowItWorks;
