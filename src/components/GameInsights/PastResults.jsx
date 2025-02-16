"use client";
import React from 'react';

const pastResults = [
    { teams: 'Team A vs Team B', score: '3-2', venue: 'Stadium Z', date: 'Dec 2, 2024' },
    { teams: 'Team c vs Team d', score: '1-1', venue: 'Stadium Z', date: 'Dec 2, 2024' },
    { teams: 'Team e vs Team f', score: '4-0', venue: 'Stadium Z', date: 'Dec 2, 2024' },
];

export const PastResults = () => {
    return (
        <section className="flex flex-col justify-center mt-6 w-full text-white max-md:max-w-full">
            <h2 className="text-2xl font-bold leading-none max-md:max-w-full">
                Past Results:
            </h2>
            <div className="flex flex-col justify-center mt-6 w-full text-lg text-center max-md:max-w-full">
                <div className="flex overflow-hidden flex-wrap gap-5 justify-between px-6 py-3 w-full text-2xl font-medium  rounded-lg border border-solid bg-primarySolid border-white border-opacity-15 max-md:px-5 max-md:max-w-full text-white">
                    <div>Teams</div>
                    <div>Score</div>
                    <div>Venue</div>
                    <div>Date</div>
                </div>
                {pastResults.map((game, index) => (
                    <div
                        key={index}
                        className="flex overflow-hidden gap-5 justify-between px-4 py-3 mt-2 w-full text-center rounded-lg border border-solid bg-secondary border-white border-opacity-15 max-md:max-w-full text-white"
                    >
                        <div>{game.teams}</div>
                        <div>{game.score}</div>
                        <div>{game.venue}</div>
                        <div>{game.date}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};