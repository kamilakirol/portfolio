import Icon from "../common/Icon";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="container header_container">
        <div className="header_icon">
          <Icon name="keyboardAndMouse" viewBox="0 0 841.9 426.2" />
        </div>
        <div className="header_navbar">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
