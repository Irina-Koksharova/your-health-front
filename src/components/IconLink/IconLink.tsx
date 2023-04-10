import { IIconLink } from "../../interfaces/IconLink.interface";
import { LinkS } from "./IconLink.styled";

const IconLink = ({ href, aria, children }: IIconLink) => (
  <LinkS href={href} aria-label={aria} target="_blank" tabIndex={0}>
    {children}
  </LinkS>
);

export default IconLink;
