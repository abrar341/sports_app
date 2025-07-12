import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DropDown from "../DropDown";
import dropdownItems from "../DropDownItems";
import { logoutUser } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const toggleDropdown = () => setDropdownVisible((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleItemClick = (item) => {
    setDropdownVisible(false);
    setMenuOpen(false);
    if (item.label === "Logout") {
      dispatch(logoutUser()); // Dispatch logout action
    } else if (item.href) {
      navigate(item.href);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#001745] text-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
        <NavLink to="/">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-14  hidden lg:block"
          />
        </NavLink>
        <nav className="hidden lg:flex lg:space-x-4 lg:justify-center">
          {[
            { to: "/dashboard", label: "Dashboard" },
            { to: "/player-insight", label: "Players Insights" },
            { to: "/team-insight", label: "Teams Insights" },
            { to: "/games-insight", label: "Games Insights" },
            { to: "/subscription", label: "Subscription" },
            // { to: "/betting-odds", label: "Betting Odds" }
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition ${
                  isActive
                    ? "bg-blue-800 text-white"
                    : "hover:bg-blue-700 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={
                userInfo?.data?.profilePictureURL ||
                "/assets/accountsetting.jpg"
              }
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
              loading="lazy"
            />
          </div>
          <DropDown
            items={dropdownItems}
            onItemClick={handleItemClick}
            isOpen={dropdownVisible}
            onClose={() => setDropdownVisible(false)}
          />
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#001745] text-white z-50 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <NavLink to="/">
            <img src="/assets/logo.png" alt="Sidebar Logo" className="w-8" />
          </NavLink>
          <button
            onClick={toggleMenu}
            className="text-white bord focus:outline-none"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            {[
              { to: "/dashboard", label: "Dashboard" },
              { to: "/player-insight", label: "Players Insights" },
              { to: "/team-insight", label: "Teams Insights" },
              { to: "/games-insight", label: "Games Insights" },
              { to: "/subscription", label: "Subscription" },
              // { to: "/betting-odds", label: "Betting Odds" }
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition ${
                      isActive
                        ? "bg-blue-800 text-white"
                        : "hover:bg-blue-700 hover:text-white"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
