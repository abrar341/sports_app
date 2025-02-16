"use client";
import * as React from "react";
import { RememberMe } from "./RememberMe";

export function LoginForm() {
    return (
        <form className="flex flex-col w-full">
            <label className="self-start mt-2 text-sm leading-snug text-white max-md:ml-1.5">
                Email
            </label>
            <input
                type="email"
                placeholder="Your email address"
                className="mt-2 px-5 py-2 text-sm leading-snug bg-transparent border text-white capitalize rounded-[16px]  min-h-[40px] w-full"
            />

            <label className="self-start mt-2 text-sm leading-snug text-white max-md:ml-1.5">
                Password
            </label>
            <input
                type="password"
                placeholder="Your password"
                className="mt-2 px-5 py-2 text-sm leading-snug bg-transparent border text-white capitalize rounded-[16px]  min-h-[40px] w-full"
            />

            <RememberMe />

            <button
                type="submit"
                className="flex justify-center items-center px-2 py-2 mt-4 text-xs font-bold text-center text-white bg-primarySolid h-[35px] rounded-[100px]"
            >
                SIGN IN
            </button>

            <p className="self-center mt-6 text-sm leading-snug text-center capitalize">
                <span className="font-normal text-gray-400 ">Don't have an </span>
                <span className="font-normal text-gray-400">account</span>
                <span className="font-normal text-gray-400">? </span>
                <a href="#signup" className="font-normal text-white">
                    Sign up
                </a>
            </p>
        </form>
    );
}
