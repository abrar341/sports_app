import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Shared/Loading";
import { EmptyState } from "../Shared/EmptyState";
import { FaRegSadTear } from "react-icons/fa";

const PlayerStatsWidget = ({ gameType }) => {
    const labelColors = ["text-red-500", "text-green-500", "text-yellow-500", "text-blue-500", "text-purple-500"];

    const { favoritePlayersHighlights } = useSelector((state) => state.favorites);
    const { favoritePlayersHighlightsLoading } = useSelector((state) => state.loading);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (!favoritePlayersHighlights || favoritePlayersHighlights.length <= 1 || hovered) return;

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
    }, [favoritePlayersHighlights, hovered]);

    if (!favoritePlayersHighlights || (favoritePlayersHighlights.length === 0 && !favoritePlayersHighlightsLoading))
        return (
            <div className="rounded-xl bg-secondary h-full">
                <EmptyState icon={FaRegSadTear} message="No favorite players added yet." />
            </div>
        );

    const currentPlayer = favoritePlayersHighlights[currentIndex];

    // Function to extract relevant American football stats
    const getAmericanFootballStats = (category, statName) => {
        const categoryData = currentPlayer?.statsSummary?.statistics?.find(stat => stat.category === category);
        return categoryData?.stats?.find(stat => stat.name === statName)?.value ?? "-";
    };

    // Dynamic Stats based on gameType
    const statsData = gameType === "soccer"
        ? [
            { label: "Goals", value: currentPlayer?.statsSummary?.totalGoals ?? "-" },
            { label: "Minutes", value: currentPlayer?.statsSummary?.totalMinutesPlayed ?? "-" },
            { label: "Matches", value: currentPlayer?.statsSummary?.totalMatchesPlayed ?? "-" }
        ]
        : [
            { label: "Rush Yards", value: getAmericanFootballStats("Rushing", "yards") },
            { label: "Rec Yards", value: getAmericanFootballStats("Receiving", "receiving yards") },
            { label: "Total TDs", value: getAmericanFootballStats("Scoring", "total touchdowns") }
        ];

    return favoritePlayersHighlightsLoading ? <Loading /> : (
        <section
            className="flex overflow-hidden h-full flex-col justify-center self-stretch px-4 py-5 my-auto rounded-[11.667px] bg-secondary min-w-60 max-md:max-w-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full min-h-[140px]">
                    <div className="flex flex-col justify-center w-full">
                        <div className="flex gap-10 justify-between items-center w-full min-h-[53px]">
                            <div className="flex gap-2 justify-center w-full items-center self-stretch my-auto">
                                <img
                                    loading="lazy"
                                    src={currentPlayer?.photo || "default-image.jpg"}
                                    className="object-cover border-2 shrink-0 self-stretch my-auto w-14 h-14 rounded-full aspect-square"
                                    alt={currentPlayer?.playerName || "Player"}
                                />
                                <div className="flex mt-4 items-start self-stretch my-auto">
                                    <div>
                                        <h3 className="text-sm font-bold tracking-tight text-neutral-50">
                                            {currentPlayer?.playerName ?? "Unknown Player"}
                                        </h3>
                                        <p className="mt-1 text-sm font-semibold tracking-normal text-gray-400">
                                            {currentPlayer?.position ?? "Unknown position"}
                                        </p>
                                        <p className="mt-1 text-xs font-semibold tracking-normal text-gray-400">
                                            {currentPlayer?.statsSummary?.season ? `(${currentPlayer.statsSummary.season})` : "-"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-7 w-full border border-gray-400 " />
                    </div>

                    <div className="flex gap-4 justify-between items-center mt-3 w-full tracking-normal min-h-12">
                        {statsData.map((stat, index) => (
                            <div key={index} className="flex items-center gap-4 w-full">
                                <div className="self-stretch w-full my-auto">
                                    <h4 className={`text-sm text-center font-semibold ${labelColors[index % labelColors.length]}`}>
                                        {stat.label}
                                    </h4>
                                    <p className="mt-1 text-sm text-center font-semibold text-neutral-50">
                                        {stat.value}
                                    </p>
                                </div>
                                {index < statsData.length - 1 && (
                                    <div className="shrink-0 self-stretch my-auto w-0 h-9 border border-gray-500" />
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlayerStatsWidget;
