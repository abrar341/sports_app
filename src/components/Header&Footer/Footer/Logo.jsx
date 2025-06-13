import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <NavLink to="/" onClick={handleScrollTop}>
      <img src="/assets/logo.png" alt="Logo" className="w-12 hidden lg:block" />
    </NavLink>
  );
}

export default Logo;
