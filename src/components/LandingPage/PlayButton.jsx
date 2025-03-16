import React from "react";

function PlayButton() {
    return (
        <button className="flex gap-3  items-center" aria-label="Play Demo">
            <div className="w-[70px] h-[70px] max-sm:w-[60px] max-sm:h-[60px]">
                <svg

                    viewBox="0 0 81 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="40.5"
                        cy="40.5"
                        r="40.5"
                        fill="#1E40AF"
                        fillOpacity="0.2"
                    />
                    <circle cx="40.5" cy="40.5" r="32.5" fill="white" />
                    <path d="M50 40.5L35 49.5263L35 31.4737L50 40.5Z" fill="#1E40AF" />
                </svg>
            </div>
            <span className="text-xl font-bold tracking-wide text-white capitalize max-sm:text-xl">
                Play Demo...
            </span>
        </button>
    );
}

export default PlayButton;
