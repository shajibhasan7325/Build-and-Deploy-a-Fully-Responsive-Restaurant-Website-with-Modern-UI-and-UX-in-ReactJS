import React from "react";
import { MenuItem, SubHeading } from "../../components";
import "./SpecialMenu.css";
import { images, data } from "../../constants";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding">
    <div className="app__specialMenu_title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu-wine flex__center">
        <p className="app__specialMenu-menu-heading">Wine & Beer</p>

        <div className="app__specialMenu-menu-items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tag={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu-img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="app__specialMenu-menu-cocktails flex__center">
        <p className="app__specialMenu-menu-heading">cocktails</p>

        <div className="app__specialMenu-menu-items">
          {data.cocktails.map((coktail, index) => (
            <MenuItem
              key={coktail.title + index}
              title={coktail.title}
              price={coktail.price}
              tag={coktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View more
      </button>
    </div>
  </div>
);

export default SpecialMenu;
