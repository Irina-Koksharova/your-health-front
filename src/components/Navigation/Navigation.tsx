import links from "../../data/navigation-links.json" assert { type: "json" };
import { NavS, ListS, LinkS } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavS>
      <ListS>
        {links.map((link) => (
          <li key={link}>
            <LinkS href={`#${link}`} aria-label={link} tabIndex={0}>
              {link}
            </LinkS>
          </li>
        ))}
      </ListS>
    </NavS>
  );
};

export default Navigation;
