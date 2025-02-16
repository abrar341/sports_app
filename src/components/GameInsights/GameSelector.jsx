"use client";
import React from 'react';

const games = [
    { id: 1, name: 'Cricket', active: true },
    { id: 2, name: 'Basketball', active: false },
    { id: 3, name: 'Football', active: false },
];

export const GameSelector = () => {
    return (
        <section className="w-full leading-none max-md:max-w-full">
            <h2 className="text-3xl font-bold max-md:max-w-full text-white">
                Select your game
            </h2>
            <div className="flex overflow-hidden gap-4 items-center mt-6 w-full text-xl whitespace-nowrap max-w-[1430px] min-h-14 max-md:max-w-full">
                {games.map((game) => (
                    <button
                        key={game.id}
                        className={`gap-2.5 self-stretch px-4 py-3 my-auto ${game.active ? 'bg-blue-800' : 'bg-sky-950'
                            } rounded-[100px] w-[136px] text-white`}
                    >
                        {game.name}
                    </button>
                ))}
            </div>
        </section>
    );
};