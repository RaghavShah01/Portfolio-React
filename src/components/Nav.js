import React from "react";
import { Link } from "react-scroll";
import { FaAlignJustify } from "react-icons/fa";

const Nav = () => {
  const [state, setState] = React.useState(false); // Set default state to `false` (menu is minimized by default)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" style={{ width: '250px' }}/>
            </div>
          </ul>
          <ul className={`navbar__right ${state ? "active" : ""}`}>
            <Link spy={true} smooth={true} duration={500} to={"home"}>
              <li>
                <a href="">Home</a>
              </li>
            </Link>

            <Link spy={true} smooth={true} duration={500} to={"about"}>
              <li>
                <a href="">About</a>
              </li>
            </Link>
            <Link spy={true} smooth={true} duration={500} to={"skills"}>
              <li>
                <a href="">Skills</a>
              </li>
            </Link>
            <Link spy={true} smooth={true} duration={500} to={"project"}>
              <li>
                <a href="">Project</a>
              </li>
            </Link>
            <Link spy={true} smooth={true} duration={500} to={"contact"}>
              <li>
                <a href="">Contact</a>
              </li>
            </Link>
            <li>
              <a
                href="https://drive.google.com/file/d/1YrYiD3-pEbELFOf8YGDtFoqjD68YhVwZ/view?usp=sharing"
                target="_blank"
                className="btn btn-outline"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
