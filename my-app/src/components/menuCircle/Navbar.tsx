import { useState } from "react";
import NavbarList from "./NavbarList";

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

      <NavbarList openMenu={openMenu} />
    </>
  );
};

export default Navbar;
