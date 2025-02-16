"use client";
import React from 'react';

const upcomingGames = [
    { teams: 'Team A vs Team B', datetime: 'Dec 2, 2024 - 7:30 PM' },
    { teams: 'Team c vs Team d', datetime: 'Dec 2, 2024 - 7:30 PM' },
    { teams: 'Team e vs Team f', datetime: 'Dec 2, 2024 - 7:30 PM' },
];

export const UpcomingGames = () => {
    return (
        <section className="w-full  max-md:max-w-full">
            <h2 className="text-2xl font-bold leading-none max-md:max-w-full text-white">
                Upcoming Games:
            </h2>
            <div className="mt-6 w-full text-lg text-center max-md:max-w-full">
                <div className="flex overflow-hidden flex-wrap gap-5 justify-between px-6 py-3 w-full text-2xl font-medium  rounded-lg border border-solid bg-primarySolid border-white border-opacity-15 max-md:px-5 max-md:max-w-full text-white">
                    <div>Teams</div>
                    <div>date/time</div>
                </div>
                {upcomingGames.map((game, index) => (
                    <div
                        key={index}
                        className="flex overflow-hidden gap-5 justify-between px-4 py-3 mt-2 w-full text-center rounded-lg border border-solid bg-secondary border-white border-opacity-15 max-md:max-w-full text-white"
                    >
                        <div>{game.teams}</div>
                        <div>{game.datetime}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};