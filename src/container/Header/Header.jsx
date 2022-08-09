import React from "react";

import "./Header.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app__header-h1">the key to Fine Dining</h1>
      <p className="p__openSans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <button className="custom__button" type="button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
