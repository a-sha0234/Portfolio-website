import { Link } from "react-router-dom";
import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);

  function handleToggle() {
    setIsToggle(false);
  }

  return (
    <nav className="navbar">
      {/* <div className="navbar__container"> */}
      <h3 className="navbar__logo">Logo</h3>

      <ul
        className={isToggle ? "nav-links-mobile" : "navbar__nav-links"}
        onClick={handleToggle}
      >
        <Link to="/" className="navbar__link">
          <li> Home</li>
        </Link>{" "}
        <Link to="/about" className="navbar__link">
          <li> About</li>
        </Link>{" "}
        <Link to="/projects" className="navbar__link">
          <li> Projects</li>
        </Link>{" "}
        <Link to="/contact" className="navbar__link">
          <li> Contact</li>
        </Link>
      </ul>

      <button
        className="mobile-menu-icon"
        onClick={() => setIsToggle(!isToggle)}
      >
        {isToggle ? <FaTimes /> : <FaBars />}
      </button>
      {/* </div> */}
    </nav>
  );
}
