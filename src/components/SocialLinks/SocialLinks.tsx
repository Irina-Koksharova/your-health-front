import links from "../../data/social-links.json" assert { type: "json" };
import SvgUse from "../SvgUse";
import { ISocialLinks } from "../../interfaces/SocialLinks.interface";
import IconLink from "../IconLink";
import { ListS } from "./SocialLinks.styled";

const SocialLinks = ({ header = false }: ISocialLinks) => {
  return (
    <ListS header={header}>
      {links.map(({ title, url, icon }) => (
        <li key={url}>
          <IconLink href={url} aria={title}>
            <SvgUse icon={icon} />
          </IconLink>
        </li>
      ))}
    </ListS>
  );
};

export default SocialLinks;
