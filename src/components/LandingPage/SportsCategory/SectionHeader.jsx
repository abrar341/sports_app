import React from "react";

function SectionHeader({ title, subtitle }) {
    return (
        <header className="mb-6 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white max-md:text-5xl max-sm:text-2xl">
                {title}
            </h1>
            <p className="mx-auto my-0 text-xl text-white max-w-[706px] max-md:text-xl max-sm:text-lg">
                {subtitle}
            </p>
        </header>
    );
}

export default SectionHeader;
