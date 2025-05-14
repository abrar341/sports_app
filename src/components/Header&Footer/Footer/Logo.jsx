import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <img src="/assets/logo.png" alt="Logo" className="w-12 hidden lg:block" />
    </NavLink>
  );
}

export default Logo;
