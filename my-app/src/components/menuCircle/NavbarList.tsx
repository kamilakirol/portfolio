import { Link } from "react-scroll";

type Props = {
  openMenu: boolean;
};

const NavbarList = ({ openMenu }: Props) => {
  return (
    <div className={`navlist ${!openMenu ? "" : "navlist_active"}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarList;
