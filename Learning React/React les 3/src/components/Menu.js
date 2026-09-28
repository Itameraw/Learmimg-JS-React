import React from "react";
import { MENU_NAVIGATION_ITEMS } from "../constants";
import MenuItem from "./MenuItem";
const Menu = () => {
  return (
    <nav className="nav">
      <p className="textNav">
        {MENU_NAVIGATION_ITEMS.map((e) => (
          <MenuItem title={e.title} link={e.link} />
        ))}
      </p>
    </nav>
  );
};
export default Menu;
