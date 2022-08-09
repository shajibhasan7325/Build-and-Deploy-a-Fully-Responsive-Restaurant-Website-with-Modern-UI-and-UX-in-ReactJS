import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_content">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__openSans">+1 212-344-1230</p>
        <p className="p__openSans">+1 212-344-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="img" />
        <p className="p__openSans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img
          src={images.spoon}
          alt=""
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-link_icon">
          <FiFacebook />
          <FiTwitter />
          <FiLinkedin />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__openSans">Monday-Friday: </p>
        <p className="p__openSans"> 08:00 am -12:00 am</p>
        <p className="p__openSans">Saturday-Sunday:</p>
        <p className="p__openSans"> 07:00am -11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__openSans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
