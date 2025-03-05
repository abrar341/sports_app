import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameInsightSelectedGame, fetchFixtures, fetchAFFixtures } from '../../slices/fixturesSlice';


export const GameSelector = () => {
    const games = [
        { id: 1, game: 'soccer', name: 'Soccer', action: fetchFixtures },
        { id: 2, game: 'american-football', name: 'American Football', action: fetchAFFixtures },
    ];
    const dispatch = useDispatch();
    const gameInsightSelectedGame = useSelector((state) => state.fixtures.gameInsightSelectedGame);
    const [selectedGame, setSelectedGame] = useState(games[0].game);

    const handleGameChange = (id) => {
        const selected = games.find((game) => game.id === id);
        if (selected) {
            setSelectedGame(selected.game);
            dispatch(setGameInsightSelectedGame(selected.game)); // Update Redux state
            // if (selected.action) {
            //     dispatch(selected.action()); // Fetch data based on the selected game
            // }
        }
    };

    return (
        <section className="w-full leading-none max-md:max-w-full">
            {/* <h2 className="text-2xl font-bold max-md:max-w-full text-white">
                Select your game
            </h2> */}
            <div className="flex overflow-hidden gap-4 items-center w-full text-base whitespace-nowrap max-w-[1430px] min-h-14 max-md:max-w-full">
                {games.map((game) => (
                    <button
                        key={game.id}
                        onClick={() => handleGameChange(game.id)}
                        className={` px-4 py-2 rounded-full my-auto ${gameInsightSelectedGame === game.game ? 'bg-primarySolid' : 'bg-searchBarBg'
                            } rounded-[100px] text-white`}
                    >
                        {game.name}
                    </button>
                ))}
            </div>
        </section>
    );
};
