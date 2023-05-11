import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowUpArrow(true);
      } else {
        setShowUpArrow(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {""}
      {showUpArrow && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      )}{" "}
      {""}
    </div>
  );
};

export default ScrollToTop;
