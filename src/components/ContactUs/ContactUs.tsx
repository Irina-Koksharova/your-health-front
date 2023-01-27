import contacts from "../../data/contact-us.json" assert { type: "json" };
import SvgUse from "../SvgUse";
import {
  ListS,
  ItemS,
  WrapperS,
  TextS,
  LinkS,
  svgStyle,
} from "./ContactUs.styled";

const ContactUs = () => {
  const getHrefAttr = (type: string, resource: string) => {
    let message = "";
    switch (type) {
      case "email":
        message = `mailto:${resource}`;
        break;
      case "phone":
        message = `tel:${resource}`;
        break;
      default:
        return message;
    }
    return message;
  };

  return (
    <ListS>
      {contacts.map(({ type, title, text, icon }) => (
        <ItemS key={text}>
          <SvgUse style={svgStyle} icon={icon} />
          <WrapperS>
            <TextS>{title}</TextS>
            <LinkS href={getHrefAttr(type, title)} aria-label={type}>
              {text}
            </LinkS>
          </WrapperS>
        </ItemS>
      ))}
    </ListS>
  );
};

export default ContactUs;
