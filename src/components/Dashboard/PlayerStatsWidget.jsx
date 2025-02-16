import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Shared/Loading";

const PlayerStatsWidget = () => {
    const { favoritePlayersHighlights } = useSelector((state) => state.favorites);
    const { favoritePlayersHighlightsLoading } = useSelector((state) => state.loading);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        if (!favoritePlayersHighlights || favoritePlayersHighlights.length === 0) return;

        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === favoritePlayersHighlights.length - 1 ? 0 : prevIndex + 1
                );
                setFade(true);
            }, 500); // Quick fade-out before change
        }, 5000);

        return () => clearInterval(interval);
    }, [favoritePlayersHighlights]);

    if (!favoritePlayersHighlights || (favoritePlayersHighlights.length === 0 && !favoritePlayersHighlightsLoading)) {
        return <p className="text-white bg-secondary h-full rounded-xl flex items-center justify-center text-center">No Players highlights to show</p>;
    }

    const currentPlayer = favoritePlayersHighlights[currentIndex];

    return favoritePlayersHighlightsLoading ? <Loading /> : (
        <section className="flex overflow-hidden h-full flex-col justify-center self-stretch px-4 py-5 my-auto rounded-[11.667px] bg-secondary min-w-60 max-md:max-w-full">
            {/* Wrapping only the dynamic content in transition */}
            <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full min-h-[140px]">
                    <div className="flex flex-col justify-center w-full">
                        <div className="flex gap-10 justify-between items-center w-full min-h-[53px]">
                            <div className="flex gap-2 items-center self-stretch my-auto">
                                <img
                                    loading="lazy"
                                    src={currentPlayer?.photo || "default-image.jpg"}
                                    className="object-cover border-2 shrink-0 self-stretch my-auto w-14 h-14 rounded-full aspect-square"
                                    alt={currentPlayer?.playerName || "Player"}
                                />
                                <div className="flex gap-3 items-start self-stretch my-auto">
                                    <div>
                                        <h3 className="text-sm font-bold tracking-tight text-neutral-50">
                                            {currentPlayer?.playerName
                                                ? currentPlayer.playerName.split(" ").slice(0, 2).join(" ")
                                                : "Unknown Player"}
                                        </h3>

                                        <p className="mt-2 text-xs tracking-normal text-white">
                                            {currentPlayer?.position || "Unknown position"}
                                        </p>
                                        <p className="mt-2 text-xs tracking-normal text-white">
                                            {`(${currentPlayer?.statsSummary.season})` || "-"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center self-stretch my-auto w-32 text-xs font-semibold text-white">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed71b6afaae17e200b0e08337a7c258fdf32198b00b821dc7b90a13e2dc855dc?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                                    className="object-contain aspect-[1.86] w-[54px]"
                                    alt="Performance graph"
                                />
                                <p className="px-3.5 py-1 mt-3 w-32 max-w-full">
                                    Goals scored per game in the last 5 matches
                                </p>
                            </div>
                        </div>
                        <hr className="mt-3 w-full border border-gray-400 " />
                    </div>
                    <div className="flex gap-4 justify-between  items-center mt-3 w-full tracking-normal min-h-12">
                        <div className="self-stretchw-full w-full  my-auto">
                            <h4 className="text-sm text-center font-semibold  text-blue-600">Goals</h4>
                            <p className="mt-1 text-sm  text-center font-semibold text-red-500">
                                {currentPlayer?.statsSummary.totalGoals || 0}
                            </p>
                        </div>
                        <div className="shrink-0 self-stretch my-auto w-0 h-9 border border-gray-500" />
                        <div className="self-stretch my-auto w-full whitespace-nowrap">
                            <h4 className="text-sm text-center font-semibold  text-blue-600">Minutes</h4>
                            <p className="mt-1 text-sm  text-center  font-semibold text-neutral-50">
                                {currentPlayer?.statsSummary.totalMinutesPlayed || 0}
                            </p>
                        </div>
                        <div className="shrink-0 self-stretch my-auto w-0 h-9 border border-gray-500" />
                        <div className="self-stretch w-full my-auto">
                            <h4 className="text-sm text-center font-semibold  text-blue-600">Matches</h4>
                            <p className="mt-1 text-center text-sm font-semibold text-neutral-50">
                                {currentPlayer?.statsSummary.totalMatchesPlayed || 0}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlayerStatsWidget;
