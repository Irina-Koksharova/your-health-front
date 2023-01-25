import links from "../../data/social-links.json" assert { type: "json" };
import { namespace } from "../../helpers/svg-helper";
import IconLink from "../IconLink";
import { ListStyled } from "./SocialLinks.styled";

const SocialLinks = ({ header = false }) => {
  return (
    <ListStyled header={header}>
      {links.map(({ url, name, path, viewBox }) => (
        <li key={url}>
          <IconLink href={url} aria={name}>
            <svg xmlns={namespace} viewBox={viewBox}>
              <path d={path} />
            </svg>
          </IconLink>
        </li>
      ))}
    </ListStyled>
  );
};

export default SocialLinks;
