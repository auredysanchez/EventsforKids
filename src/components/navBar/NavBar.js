import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./NavBar.scss";

import menuItemData from "../../data/menuItemData.json";

const NavBar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="navbar">
      <div
        className={active ? "navbar__menuItems-active" : "navbar__menuItems"}
      >
        <ul>
          {/* <li>
            <Link to="/about">About</Link>
          </li>  */}
          {menuItemData.map((menuItem, key) => {
            return (
              <li key={key}>
                <a href={menuItem.href}>{menuItem.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div 
        className="navbar__overlay"
        style={{ display: active ? "block" : "none" }}
        onClick={() => setActive(false)}
      >
  
      </div>
      <div
        className="navbar__collapsedMenuIcon"
        onClick={() => setActive(!active)}
      >
        =
      </div>
    </div>
  );
};

export default NavBar;
