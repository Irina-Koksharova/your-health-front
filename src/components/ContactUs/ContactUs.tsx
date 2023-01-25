import contacts from "../../data/contact-us.json" assert { type: "json" };
import { namespace } from "../../helpers/svg-helper";
import {
  ListStyled,
  ItemStyled,
  PathStyled,
  SvgStyled,
  WrapperStyled,
  TextStyled,
  LinkStyled,
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
    <ListStyled>
      {contacts.map(
        ({ type, text, icon, resource, viewBox, width, height }) => (
          <ItemStyled key={resource}>
            <SvgStyled
              xmlns={namespace}
              viewBox={viewBox}
              width={width}
              height={height}
            >
              {icon.map((item) => (
                <PathStyled key={item} d={item} />
              ))}
            </SvgStyled>
            <WrapperStyled>
              <TextStyled>{text}</TextStyled>
              <LinkStyled href={getHrefAttr(type, resource)} aria-label={type}>
                {resource}
              </LinkStyled>
            </WrapperStyled>
          </ItemStyled>
        )
      )}
    </ListStyled>
  );
};

export default ContactUs;
