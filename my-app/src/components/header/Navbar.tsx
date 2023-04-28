import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div
        className={`burger ${openMenu && "isActive"} `}
        onClick={handleClick}
      >
        <div className="burger_bars">
          <span></span>
        </div>
      </div>

      <nav className="navlist">
        <NavbarDesktop />
        <NavbarMobile openMenu={openMenu} />
      </nav>
    </>
  );
};

export default Navbar;
