"use client";
import React from 'react';

const liveGames = [
    { teams: 'Team A vs Team B', timeLeft: '15 minutes left', score: '54-62' },
    { teams: 'Team c vs Team d', timeLeft: '5 minutes left', score: '85-78' },
    { teams: 'Team e vs Team f', timeLeft: 'Halftime', score: '45-50' },
];

export const LiveGames = () => {
    return (
        <section className="self-stretch md:col-span-2 my-auto  min-w-60 max-md:max-w-full">
            <h2 className="text-2xl font-bold leading-none max-md:max-w-full text-white">
                Live games
            </h2>
            <div className="mt-6 w-full text-lg max-md:max-w-full">
                <div className="flex overflow-hidden gap-5 justify-between px-4 py-3 w-full text-xl font-medium rounded-lg border border-solid bg-primarySolid border-white border-opacity-15 max-md:max-w-full text-white">
                    <div>Teams</div>
                    <div className="text-center">Time Left</div>
                    <div className="text-right">Current score</div>
                </div>
                {liveGames.map((game, index) => (
                    <div
                        key={index}
                        className="flex overflow-hidden gap-5 justify-between px-4 py-3 mt-2 w-full text-center rounded-lg border border-solid bg-secondary border-white border-opacity-15 max-md:max-w-full text-white"
                    >
                        <div>{game.teams}</div>
                        <div>{game.timeLeft}</div>
                        <div>{game.score}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};