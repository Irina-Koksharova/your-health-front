import { IIconLink } from "../../interfaces/IconLink.interface";
import { LinkStyled } from "./IconLink.styled";

const IconLink = (prop: IIconLink) => (
  <LinkStyled href={prop.href} aria-label={prop.aria} target="_blank">
    {prop.children}
  </LinkStyled>
);

export default IconLink;
