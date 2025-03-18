"use client";
import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SocialIcons from "./SocialIcons";
import Footer from "./Footer";

function Navbar() {
    return (
        <div className="flex mt-6 overflow-hidden flex-col justify-center px-14 py-6 bg-slate-900 max-md:px-5">
            <div className="flex flex-col justify-center w-full max-md:max-w-full">
                <header className="flex flex-wrap gap-4 md:gap-10 justify-between items-center w-full max-md:max-w-full">
                    <div className="flex flex-wrap gap-4 md:gap-10 justify-between items-center self-stretch my-auto text-white min-w-60 w-[775px] max-md:max-w-full">
                        <Logo />
                        <NavLinks />
                    </div>
                    <SocialIcons />
                </header>
                <Footer />
            </div>
        </div>
    );
}

export default Navbar;
