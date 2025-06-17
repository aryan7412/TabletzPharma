import React from "react";
import { NavLink } from "react-router-dom";

function NavItems({ label, path }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-pink-700" : "text-gray-700"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-700 lg:p-0`
        }
      >
        {label}
      </NavLink>
    </li>
  );
}

export default NavItems;
