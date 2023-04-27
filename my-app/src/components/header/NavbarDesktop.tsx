import { Link } from "react-scroll";

const NavbarDesktop = () => {
  return (
    <ul className="navlist_desktop">
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

export default NavbarDesktop;
