import React from "react";

function NavLinks() {
    return (
        <nav className="flex flex-wrap gap-3 justify-center items-center self-stretch my-auto text-sm font-semibold min-w-60 max-md:max-w-full">
            <a
                href="#"
                className="overflow-hidden gap-2.5 self-stretch py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[62px]"
            >
                Home
            </a>
            <a
                href="#"
                className="overflow-hidden gap-2.5 self-stretch px-6 py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[82px] max-md:px-5"
            >
                news
            </a>
            <a
                href="#"
                className="overflow-hidden gap-2.5 self-stretch px-6 py-4 my-auto text-center whitespace-nowrap bg-slate-900 min-h-10 w-[89px] max-md:px-5"
            >
                games
            </a>
            <a
                href="#"
                className="overflow-hidden gap-2.5 self-stretch py-4 pr-4 pl-4 my-auto bg-slate-900 min-h-10 w-[115px]"
            >
                betting odds
            </a>
            <a
                href="#"
                className="overflow-hidden gap-2.5 self-stretch py-4 pr-4 pl-5 my-auto whitespace-nowrap bg-slate-900 min-h-10 w-[97px]"
            >
                education
            </a>
            <a
                href="#"
                className="overflow-hidden gap-2.5 self-stretch px-3.5 py-4 my-auto bg-slate-900 min-h-10 w-[97px]"
            >
                contact us
            </a>
        </nav>
    );
}

export default NavLinks;
