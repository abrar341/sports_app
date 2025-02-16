"use client";
import React from 'react';

const insights = [
    "Player X is out due to injury.",
    "Match A vs B delayed due to weather.",
    "Player of the Month announced!",
    "Player of the Month announced!"
];

export const Insights = () => {
    return (
        <section className="flex flex-col justify-center self-stretch my-auto min-w-60 h-full">
            <h2 className="text-2xl font-bold leading-none text-white">
                Insights
            </h2>
            <div className="flex overflow-hidden flex-col items-start py-4 pr-10 pl-5 justify-center h-full mt-6 w-full  font-medium rounded-lg bg-slate-900 max-md:px-5">
                {insights.map((insight, index) => (
                    <p
                        key={index}
                        className={`${index > 0 ? 'mt-6' : ''} leading-6 text-white`}
                    >
                        {insight}
                    </p>
                ))}
            </div>
        </section>
    );
};