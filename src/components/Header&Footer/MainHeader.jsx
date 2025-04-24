import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const MainHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="sticky top-0 z-20 bg-[#001745] text-white shadow-lg">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>
                <NavLink to="/dashboard/account-setting">
                    <img src="/assets/shield.png" alt="Logo" className="w-12 h-12 hidden lg:block" />
                </NavLink>
                <nav className="hidden lg:flex lg:space-x-4 lg:justify-center">
                    {[
                        { to: "/", label: "Home" },
                        { to: "/news", label: "News" },
                        { to: "/games", label: "Games" },
                        // { to: "/betting-odds", label: "Betting Odds" },
                        { to: "/pricing", label: "Pricing" },
                        // { to: "/education", label: "Education" },
                        { to: "/contact", label: "Contact Us" }
                    ].map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `px-4 py-2  transition ${isActive ? "border-b-2 border-blue-700 text-white" : "hover:border-blue-700 hover:border-b hover:text-white"}`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
                <div className="flex gap-4">
                    <NavLink to="/signin" className="px-4 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition">Login</NavLink>
                    <NavLink to="/signup" className="px-4 py-2 rounded-full bg-[#001765] hover:text-white transition">Sign Up</NavLink>
                </div>
            </div>
            {menuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>}
            <div className={`fixed top-0 left-0 h-full w-64 bg-[#001745] text-white z-50 shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <NavLink to="/dashboard/account-setting">
                        <img src="/assets/shield.png" alt="Sidebar Logo" className="w-8 h-8" />
                    </NavLink>
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <FaTimes className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-4">
                    <ul className="space-y-2">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/news", label: "News" },
                            { to: "/games", label: "Games" },
                            { to: "/betting-odds", label: "Betting Odds" },
                            { to: "/pricing", label: "Pricing" },
                            // { to: "/education", label: "Education" },
                            { to: "/contact", label: "Contact Us" }
                        ].map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        `block px-4 py-2 transition ${isActive ? "border-b-2 border-blue-700 text-white" : "hover:border-b border-blue-700 hover:text-white"}`
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

export default MainHeader;