"use client";
import * as React from "react";

export function RememberMe() {
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <div className="flex px-1 gap-3 mt-6 items-center">
            <button
                type="button"
                onClick={() => setIsChecked(!isChecked)}
                className={`relative w-10 h-5 rounded-full border-2 transition-colors duration-300 ease-in-out 
                    ${isChecked ? "bg-blue-600 border-blue-600" : "bg-gray-300 border-gray-400"}`}
            >
                <div
                    className={`absolute top-[0.6px] left-[1.1px] w-3.5 h-3.5 bg-white rounded-full shadow-md transform transition-transform duration-300
                        ${isChecked ? "translate-x-5" : "translate-x-0"}`}
                />
            </button>
            <label className="text-sm font-medium text-gray-400 select-none">
                Remember me
            </label>
        </div>
    );
}
