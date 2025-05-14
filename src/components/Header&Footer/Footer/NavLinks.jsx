import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <nav className="flex flex-wrap gap-3 justify-center items-center self-stretch my-auto text-sm font-semibold min-w-60 max-md:max-w-full">
      <NavLink
        className="overflow-hidden gap-2.5 self-stretch py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[62px]"
        to="/news"
      >
        Home
      </NavLink>
      <NavLink
        className="overflow-hidden gap-2.5 self-stretch py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[62px]"
        to="/news"
      >
        News
      </NavLink>
      <NavLink
        className="overflow-hidden gap-2.5 self-stretch py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[62px]"
        to="/games"
      >
        Games
      </NavLink>
      <NavLink
        className="overflow-hidden gap-2.5 self-stretch py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[62px]"
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className="overflow-hidden gap-2.5 self-stretch py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[62px]"
        to="/pricing"
      >
        Pricing
      </NavLink>
    </nav>
  );
}

export default NavLinks;
