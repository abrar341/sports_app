import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../Shared/Loading";

const TeamStatsWidget = () => {
    const { favoriteTeamsHighlights } = useSelector((state) => state.favorites);
    const { favoriteTeamsHighlightsLoading } = useSelector((state) => state.loading);

    const [index, setIndex] = useState(0);
    const [hovered, setHovered] = useState(false);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        if (!hovered && favoriteTeamsHighlights.length > 1) {
            const interval = setInterval(() => {
                setFade(false); // Start fade-out
                setTimeout(() => {
                    setIndex((prevIndex) => (prevIndex + 1) % favoriteTeamsHighlights.length);
                    setFade(true); // Start fade-in
                }, 500); // Wait for fade-out to finish before changing index
            }, 5000); // Change every 3 seconds

            return () => clearInterval(interval);
        }
    }, [favoriteTeamsHighlights.length, hovered]);

    if (!favoriteTeamsHighlights.length && !favoriteTeamsHighlightsLoading) return null;

    const currentTeam = favoriteTeamsHighlights[index];
    const stats = currentTeam?.statsSummary?.[0] || {};

    return favoriteTeamsHighlightsLoading ? <Loading /> : (
        <section
            className="flex overflow-hidden flex-col justify-center self-stretch px-4 py-5 my-auto rounded-[11.667px] bg-secondary min-w-60 h-full max-md:max-w-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Fade effect only on content */}
            <div
                key={index} // Forces re-render on index change
                className={`transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
            >
                <div className="w-full min-h-[140px]">
                    <div className="w-full">
                        <div className="flex flex-col justify-center w-full">
                            <div className="flex gap-2 items-center justify-center w-full self-start text-sm font-bold tracking-tight text-neutral-50">
                                <img
                                    loading="lazy"
                                    src={currentTeam.logo}
                                    className="object-contain shrink-0 self-stretch my-auto w-12 border-2 aspect-square rounded-full"
                                    alt={currentTeam.team}
                                />
                                <h3 className="self-stretch my-auto">{currentTeam.team}</h3>
                            </div>
                            {/* Form Representation */}
                            <div className="flex mt-4 flex-col w-full rounded max-w-[406px]">
                                <div className=" w-full rounded bg-stone-50">
                                    <div className="flex bg-sky-400 rounded overflow-hidden">
                                        {(() => {
                                            const form = stats.form?.slice(0, 5) || "";
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
                                    {stats.form?.slice(0, 5).split('').map((char, i) => (
                                        <span key={i} className={char === "W" ? "text-green-500" : char === "L" ? "text-red-500" : "text-yellow-500"}>
                                            {char}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <hr className="mt-5 w-full border border-gray-400 " />

                    </div>
                    <div className="flex gap-4 justify-between  items-center mt-3 w-full tracking-normal min-h-12">
                        <div className="self-stretchw-full w-full  my-auto">
                            <h4 className="text-sm text-center font-semibold  text-blue-600">Matches</h4>
                            <p className="mt-1 text-sm  text-center font-semibold text-neutral-50">
                                {stats?.matchesPlayed || "-"}                            </p>
                        </div>
                        <div className="shrink-0 self-stretch my-auto w-0 h-9 border border-gray-500" />
                        <div className="self-stretch my-auto w-full whitespace-nowrap">
                            <h4 className="text-sm text-center font-semibold  text-green-600">Wins</h4>
                            <p className="mt-1 text-sm  text-center  font-semibold text-neutral-50">
                                {stats?.wins || "-"}                            </p>
                        </div>
                        <div className="shrink-0 self-stretch my-auto w-0 h-9 border border-gray-500" />
                        <div className="self-stretch w-full my-auto">
                            <h4 className="text-sm text-center font-semibold  text-yellow-600">Losses</h4>
                            <p className="mt-1 text-center text-sm font-semibold text-neutral-50">
                                {stats?.loses || "-"}                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamStatsWidget;
