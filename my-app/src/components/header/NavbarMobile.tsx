import { Link } from "react-scroll";

type Props = {
  openMenu: boolean;
};

const NavbarMobile = ({ openMenu }: Props) => {
  return (
    <ul
      className={` ${!openMenu ? "navlist_mobile" : "navList_mobile_active"}`}
    >
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
  );
};

export default NavbarMobile;
