import { NavLink } from "react-router-dom";

function NavLinks() {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="flex flex-wrap gap-3 justify-center items-center self-stretch my-auto text-sm font-semibold min-w-60 max-md:max-w-full">
      <NavLink
        className="overflow-hidden gap-2.5 self-stretch py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[62px]"
        to="/"
        onClick={handleScrollTop}
      >
        Home
      </NavLink>
      <NavLink
        className="overflow-hidden gap-2.5 self-stretch py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[62px]"
        to="/news"
        onClick={handleScrollTop}
      >
        News
      </NavLink>
      <NavLink
        className="overflow-hidden gap-2.5 self-stretch py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[62px]"
        to="/games"
        onClick={handleScrollTop}
      >
        Games
      </NavLink>
      <NavLink
        className="overflow-hidden gap-2.5 self-stretch py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[62px]"
        to="/contact"
        onClick={handleScrollTop}
      >
        Contact
      </NavLink>
      <NavLink
        className="overflow-hidden gap-2.5 self-stretch py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[62px]"
        to="/pricing"
        onClick={handleScrollTop}
      >
        Pricing
      </NavLink>
    </nav>
  );
}

export default NavLinks;
