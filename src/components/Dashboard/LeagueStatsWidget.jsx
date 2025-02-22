"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Shared/Loading";

const LeagueStatsWidget = () => {
    const { favoriteLeaguessHighlights } = useSelector((state) => state.favorites);
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [hovered, setHovered] = useState(false);
    const { favoriteTeamsHighlightsLoading } = useSelector((state) => state.loading);

    useEffect(() => {
        if (!hovered && favoriteLeaguessHighlights.length > 1) {
            const interval = setInterval(() => {
                setFade(false); // Start fade-out
                setTimeout(() => {
                    setIndex((prevIndex) => (prevIndex + 1) % favoriteLeaguessHighlights.length);
                    setFade(true); // Start fade-in
                }, 500); // Wait for fade-out to finish before changing index
            }, 5000); // Change every 5 seconds

            return () => clearInterval(interval);
        }
    }, [favoriteLeaguessHighlights.length, hovered]);

    if (!favoriteLeaguessHighlights.length && !favoriteTeamsHighlightsLoading) return null;

    const league = favoriteLeaguessHighlights[index];
    const topTeam = league?.standings[0]; // Top team in the standings

    return favoriteTeamsHighlightsLoading ? <Loading /> : (
        <section
            className="flex overflow-hidden flex-col h-full justify-center self-stretch px-4 py-5 my-auto rounded-[11.667px] bg-secondary min-w-60 text-neutral-50 max-md:max-w-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                <div className="flex flex-col justify-center w-full text-sm font-bold tracking-tight">
                    <div className="flex items-center gap-2">
                        <p>League Name:</p>
                        <h3 className="self-stretch text-base text-[#0147B9] my-auto">{league.leagueName}</h3>
                    </div>
                    <hr className="mt-2 w-full border border-gray-400" />
                </div>
                <div className="max-w-full text-xl tracking-tight">
                    <div className="flex flex-col justify-center w-full">
                        <div className="flex gap-4 items-center justify-center w-full text-sm font-bold tracking-tight text-neutral-50">
                            <img
                                loading="lazy"
                                src={topTeam.team.logo}
                                className="object-contain shrink-0 self-stretch my-auto w-14 border-2 aspect-square rounded-full"
                                alt={`${topTeam.team.name} logo`}
                            />
                            <div className="flex flex-col mt-4 items-center justify-center">
                                <h3 className="text-lg font-bold tracking-tight text-neutral-50">
                                    {topTeam.team.name}
                                </h3>
                                <div className="pb-3 text-sm flex w-full justify-between">
                                    <div className="mr-5 font-semibold tracking-normal text-gray-400">
                                        <p className="text-center">Rank</p>
                                        <p className="text-sm text-center">{topTeam.rank}</p>
                                    </div>
                                    <div className="mr-5 font-semibold tracking-normal text-gray-400">
                                        <p className="text-center">Points</p>
                                        <p className="text-sm text-center">{topTeam.points}</p>
                                    </div>
                                    <div className="font-semibold tracking-normal text-gray-400">
                                        <p className="text-center">GoalsDiff</p>
                                        <p className="text-sm text-center">{topTeam.goalsDiff}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Representation */}
                <div className="flex mb-2 mt-4 min-h-[30px] flex-col w-full rounded max-w-[406px]">
                    {
                        topTeam.form &&

                        <>
                            <div className=" w-full rounded bg-stone-50">
                                <div className="flex bg-sky-400 rounded overflow-hidden">
                                    {(() => {
                                        const form = topTeam.form || "";
                                        const total = form.length || 1;
                                        const wCount = form.match(/W/g)?.length || 0;
                                        const dCount = form.match(/D/g)?.length || 0;
                                        const lCount = form.match(/L/g)?.length || 0;

                                        return (
                                            <>
                                                <div className="h-2.5 bg-green-400" style={{ flex: wCount / total }} />
                                                <div className="h-2.5 bg-amber-200" style={{ flex: dCount / total }} />
                                                <div className="h-2.5 bg-red-400" style={{ flex: lCount / total }} />
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>
                            <div className="flex gap-5 justify-between self-center mt-1 max-w-full text-xs font-semibold tracking-normal text-white whitespace-nowrap w-[362px]">
                                {topTeam.form?.split('').map((char, i) => (
                                    <span key={i} className={char === "W" ? "text-green-500" : char === "L" ? "text-red-500" : "text-yellow-500"}>
                                        {char}
                                    </span>
                                ))}
                            </div>
                        </>
                    }
                </div>


                <hr className="w-full border border-gray-400" />
                <p className="mt-3 gap-2 flex justify-center items-center">
                    <span className="text-base font-semibold text-center text-white">Top Scorer: </span>
                    <span className="text-base font-semibold text-center text-[#0147B9]">
                        {league.topScorers?.players[0]?.player.name || "-"} with 15 goals.
                    </span>
                </p>
            </div>
        </section>
    );
};

export default LeagueStatsWidget;
