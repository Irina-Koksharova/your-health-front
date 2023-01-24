import links from "../../data/social-links.json" assert { type: "json" };
import IconButton from "../IconLink";
import { ListStyled } from "./SocialLinks.styled";

const SocialLinks = ({ header = false }) => {
  return (
    <ListStyled header={header}>
      {links.map(({ url, name, path, viewBox }) => (
        <li key={url}>
          <IconButton href={url} aria={name}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
              <path d={path}></path>
            </svg>
          </IconButton>
        </li>
      ))}
    </ListStyled>
  );
};

export default SocialLinks;
