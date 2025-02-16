"use client";
import React from 'react';

export const PerformanceTrends = () => {
    return (
        <section className="mt-6 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
                <h2 className="self-stretch my-auto text-2xl font-bold leading-none text-white">
                    Performance trends
                </h2>
                <button className="flex gap-2 items-center self-stretch my-auto text-xl font-medium tracking-tighter h-[31px] text-neutral-50 w-[158px]">
                    <span className="self-stretch my-auto">Choose Player</span>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e8e24dee72e9f92deb0d8d56bb01f97db65cb1261cd68ca08f18217f9701c3e"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[31px]"
                        alt="Choose player icon"
                    />
                </button>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2af30ff547e2d7f743e988ea17e284007146386530815fd6156a9ed74a29323"
                className="object-contain mt-6 w-full rounded-xl aspect-[3.14] max-md:max-w-full"
                alt="Performance trends chart"
            />
        </section>
    );
};