"use client";
import React from 'react';
import { MatchList } from './MatchList';
import { TipsAndTrends } from './TipsAndTrends';
import { AIPredictions } from './AIPredictions';
import PlayerInsightSearchBar from '../Shared/PlayerInsightSearchBar';
import PerformanceUpdates from '../Shared/PerformanceUpdates';
import PlayersAreaChart from '../Shared/PlayersAreaChart';
import { AreaChartData } from '../PlayersInsights/PlayerData';

const BettingOdds = () => {
    return (
        <main className="flex flex-col justify-center bg-primary p-8">
            <div className="flex flex-col justify-center w-full max-md:max-w-full">
                <div className="flex flex-col justify-center w-full max-md:max-w-full">
                    <div className="w-full max-md:max-w-full">
                        <PlayerInsightSearchBar />
                    </div>

                    <section className="flex flex-col justify-center mt-6 w-full text-white max-md:max-w-full">
                        <header className="flex flex-col max-w-full font-bold leading-none w-[309px]">
                            <h1 className="text-2xl">Barcelona FC players Feed</h1>
                            <button className="flex gap-4 items-center self-start mt-4 text-xl whitespace-nowrap">
                                <span className="self-stretch text-base my-auto">Filter</span>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc804de40e1ab508d28f6002f6e79092d3ad7dbb59283e48b71fb8cbbfadacb1?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                    alt="Filter icon"
                                />
                            </button>
                        </header>

                        <MatchList />
                    </section>
                </div>
                <div className='mt-2'>
                    <PerformanceUpdates />
                    <PlayersAreaChart data={AreaChartData} />
                </div>
            </div>

            <div className="grid mt-6 grid-cols-1 md:grid-cols-2 gap-6 items-center mt-4 w-full text-white max-md:max-w-full">
                <TipsAndTrends />
                <AIPredictions />
            </div>
        </main>
    );
};

export default BettingOdds
