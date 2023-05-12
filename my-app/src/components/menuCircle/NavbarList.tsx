import { Link } from "react-scroll";

type Props = {
  openMenu: boolean;
};

const NavbarList = ({ openMenu }: Props) => {
  return (
    <div className={`navlist ${!openMenu ? "" : "navlist_active"}`}>
      <ul>
        <li>
          <Link to="banner" smooth>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth>
            About me
          </Link>
        </li>
        <li>
          <Link to="projects" smooth>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarList;
