import links from "../../data/navigation-links.json" assert { type: "json" };
import { NavStyled, ListStyled, LinkStyled } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavStyled>
      <ListStyled>
        {links.map((link) => (
          <li key={link}>
            <LinkStyled href={`#${link}`} aria-label={link}>
              {link}
            </LinkStyled>
          </li>
        ))}
      </ListStyled>
    </NavStyled>
  );
};

export default Navigation;
