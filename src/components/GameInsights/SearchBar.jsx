"use client";
import React from 'react';

export const SearchBar = () => {
    return (
        <div className="flex flex-wrap gap-3 justify-between items-center w-full max-md:max-w-full">
            <div className="flex overflow-hidden flex-col justify-center items-start self-stretch px-14 py-5 my-auto text-base text-white bg-white bg-opacity-30 min-w-60 rounded-[100px] shadow-[0px_1px_55px_rgba(84,84,84,0.06)] w-[1194px] max-md:px-5 max-md:max-w-full">
                <div className="gap-4 self-stretch">
                    Search by Player/Team/Game...
                </div>
            </div>
            <div className="flex gap-2.5 justify-center items-center self-stretch px-2.5 py-3 my-auto bg-blue-800 min-h-[60px] rounded-[100px] w-[154px]">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/40614462285f53324a6704e19dcfdbc83fd2da5060d0e3114de9243722124c65"
                    className="object-contain self-stretch my-auto aspect-square w-[38px]"
                    alt="Search icon"
                />
            </div>
        </div>
    );
};