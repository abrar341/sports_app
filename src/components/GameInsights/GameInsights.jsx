
import React, { useEffect, useState } from 'react';
import { GameSelector } from './GameSelector';
import { LiveGames } from './LiveGames';
import { Insights } from './Insights';
import { UpcomingGames } from './UpcomingGames';
import { CompletedGames } from './CompletedGames';
import { PastResults } from './PastResults';
import { PerformanceTrends } from './PerformanceTrends';
import { Statistics } from './Statistics';
import { WinLossTrends } from './WinLossTrends';
import PlayerInsightSearchBar from '../Shared/PlayerInsightSearchBar';
import TrendingInsightCard from '../Dashboard/TrendingInsightCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAFFixtures, fetchFixtures } from '../../slices/fixturesSlice';


export const GameInsights = () => {
    const dispatch = useDispatch();

    // Get selected game from Redux store
    const gameInsightSelectedGame = useSelector((state) => state.fixtures.gameInsightSelectedGame);

    useEffect(() => {
        if (gameInsightSelectedGame === 'soccer') {
            dispatch(fetchFixtures());
        } else if (gameInsightSelectedGame === 'american-football') {
            dispatch(fetchAFFixtures());
        }
    }, [dispatch, gameInsightSelectedGame]);


    return (
        <main className="w-full max-md:max-w-full bg-primary p-8">
            <PlayerInsightSearchBar />
            <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
                <GameSelector />
                <div className="mt-6 w-full max-md:max-w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between items-center w-full max-md:max-w-full">
                        <LiveGames selectedGame={gameInsightSelectedGame} />
                        <Insights />
                    </div>
                    <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
                        <UpcomingGames selectedGame={gameInsightSelectedGame} />
                        <CompletedGames selectedGame={gameInsightSelectedGame} />
                    </div>
                </div>
                <section className="mt-6 w-full max-md:max-w-full">
                    <h2 className="text-3xl font-bold leading-none text-white max-md:max-w-full">
                        Trending Insights:
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 mt-6 max-md:max-w-full">
                        <TrendingInsightCard
                            title="Sharp money favors Team Y in tonight's game."
                            description="Large bets on Team Y in betting markets."
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6bcceb3b82613ef00ef3e333011a179574b4566dfba65fcec061bcf8f4d130?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                        />
                        <TrendingInsightCard
                            title="Odds for Team Z dropped from 3.5 to 2.8."
                            description="Team Z's chances are improving."
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5ade162c8c28c91216938f5644ed21c7f762058eb20ae12a102ed79bd1abf5f2?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                        />
                        <TrendingInsightCard
                            title="Player X's form dipped in the last 3 matches"
                            description="Scored 1 goal in the last 5 games"
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/278a81500da920107d8996957c4e7a38761c3258d25882979167edb045671b9f?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                        />
                    </div>
                </section>
                <PastResults />
                <PerformanceTrends />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center mt-6 w-full max-md:max-w-full">
                    <div className='md:col-span-2 h-full'>
                        <Statistics />
                    </div>
                    <WinLossTrends />
                </div>
            </div>
        </main>
    );
};

