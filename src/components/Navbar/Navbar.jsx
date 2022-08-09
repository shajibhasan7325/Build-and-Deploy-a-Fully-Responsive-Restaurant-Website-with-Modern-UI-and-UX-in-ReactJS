import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app-logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__openSans">
          <a href="#home">Home</a>
        </li>
        <li className="p__openSans">
          <a href="#about">About</a>
        </li>
        <li className="p__openSans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__openSans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__openSans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__openSans">
          Login/Register
        </a>
        <div />
        <a href="#book" className="p__openSans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallScreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="app__navbar-smallScreen-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              color="#fff"
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />

            <ul className="app__navbar-smallScreen-links">
              <li className="p__openSans">
                <a href="#home">Home</a>
              </li>
              <li className="p__openSans">
                <a href="#about">About</a>
              </li>
              <li className="p__openSans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__openSans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__openSans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
