import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAFFixtures, fetchFixtures } from '../../slices/fixturesSlice';
// import { fetchAFFixtures } from '../../slices/affixturesSlice'; // Add your other fixture fetch functions

const games = [
    { id: 1, name: 'Soccer', action: fetchFixtures },
    // { id: 2, name: 'American Football', action: fetchAFFixtures },
    // Add more games and their respective actions
];

export const GameSelector = () => {
    const dispatch = useDispatch();
    const [selectedGame, setSelectedGame] = useState(games[0].id);

    const handleGameChange = (id) => {
        setSelectedGame(id);
        const selected = games.find((game) => game.id === id);
        if (selected && selected.action) {
            dispatch(selected.action());
        }
    };

    return (
        <section className="w-full leading-none max-md:max-w-full">
            <h2 className="text-3xl font-bold max-md:max-w-full text-white">
                Select your game
            </h2>
            <div className="flex overflow-hidden gap-4 items-center mt-6 w-full text-xl whitespace-nowrap max-w-[1430px] min-h-14 max-md:max-w-full">
                {games.map((game) => (
                    <button
                        key={game.id}
                        onClick={() => handleGameChange(game.id)}
                        className={`gap-2.5 self-stretch px-6 py-2 my-auto ${selectedGame === game.id ? 'bg-blue-800' : 'bg-sky-950'
                            } rounded-[100px] text-white`}
                    >
                        {game.name}
                    </button>
                ))}
            </div>
        </section>
    );
};
