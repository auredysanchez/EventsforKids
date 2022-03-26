import React, { useState } from "react";
import "./NavBar.scss";

import menuItemData from "../../data/menuItemData.json";

function NavBar() {
  const [active, setActive] = useState(false);

  return (
    <div className="navbar">
      {/* <div className="navbar__logo">Logo</div> */}
      <div
        className={active ? "navbar__menuItems-active" : "navbar__menuItems"}
      >
        <ul>
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
        className="navbar__collapsedMenuIcon"
        onClick={() => setActive(!active)}
      >
          =
      </div>
    </div>
  );
}

export default NavBar;