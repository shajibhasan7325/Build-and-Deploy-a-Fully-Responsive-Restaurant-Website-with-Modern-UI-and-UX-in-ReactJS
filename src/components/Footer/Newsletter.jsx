import React from "react";
import SubHeading from "../SubHeading/SubHeading";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="newsletter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p p__openSans style={{color:"#fff"}}>And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input">
      <input type="email" placeholder="inter your email" />
      <button className="custom__button">subscribe</button>

    </div>
  </div>
);

export default Newsletter;
