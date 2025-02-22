import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import PropTypes from "prop-types";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const PlayersPieChart = ({ stats, sport }) => {
    const seasons = [...new Set(stats?.map(season => season.season))];

    const [selectedSeason, setSelectedSeason] = useState(seasons[0]);
    useEffect(() => {
        if (seasons.length > 0 && selectedSeason === null) {
            setSelectedSeason(seasons[0]); // Set the first available season
        }
    }, [seasons]); // Runs whenever `seasons` changes

    const getAggregatedData = () => {
        if (!Array.isArray(stats) || stats.length === 0) return [];

        const filteredStats = stats.filter(season => season.season === Number(selectedSeason));

        if (sport === "soccer") {
            return [
                { name: "Goals", value: filteredStats.reduce((acc, season) => acc + (season.totalGoals || 0), 0) },
                { name: "Fouls", value: filteredStats.reduce((acc, season) => acc + (season.totalFouls || 0), 0) },
                { name: "Shots", value: filteredStats.reduce((acc, season) => acc + (season.shots || 0), 0) },
                { name: "Passes", value: filteredStats.reduce((acc, season) => acc + (season.passes || 0), 0) }
            ];
        }

        if (sport === "american-football") {
            const categoryTotals = {};

            filteredStats.forEach(season => {
                if (!season.statistics) return; // Prevent error if statistics is missing

                season.statistics.forEach(({ category, stats }) => {
                    if (!stats) return; // Prevent error if stats is missing

                    const totalCategoryValue = stats.reduce((acc, stat) => acc + Number(stat.value || 0), 0);
                    categoryTotals[category] = (categoryTotals[category] || 0) + totalCategoryValue;
                });
            });

            return Object.entries(categoryTotals).map(([name, value]) => ({ name, value }));
        }

        return [];
    };


    const aggregatedData = getAggregatedData();
    const colorScheme = ["#3B82F6", "#22C55E", "#9CA3AF", "#EC4899", "#FBBF24", "#8B5CF6", "#34D399"];
    const { playerStatsLoading } = useSelector(state => state.loading);

    return playerStatsLoading ? <Loading /> : (
        <div className="bg-secondary rounded-lg p-4 flex flex-col items-center h-full">
            {stats ? (
                <>
                    <div className="mb-4 w-full flex justify-end space-x-2">
                        {seasons?.map(season => (
                            <button
                                key={season}
                                onClick={() => setSelectedSeason(season)}
                                className={`px-3 py-1 rounded ${selectedSeason === season ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}>
                                {season}
                            </button>
                        ))}
                    </div>
                    <PieChart width={450} height={380}>
                        <Pie
                            data={aggregatedData}
                            dataKey="value"
                            cx="50%"
                            cy="45%"
                            innerRadius={80}
                            outerRadius={120}
                            paddingAngle={3}
                            label={({ name, value }) => `${name}: ${value}`}
                            labelLine={false}
                        >
                            {aggregatedData?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colorScheme[index % colorScheme.length]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: "gray", border: "none", color: "#fff" }} />
                        <Legend
                            align="center"
                            verticalAlign="bottom"
                            layout="horizontal"
                            iconType="circle"
                            wrapperStyle={{ fontSize: "12px", color: "white" }}
                        />
                    </PieChart>
                </>
            ) : (
                <div>No stats found</div>
            )}
        </div>
    );
};

PlayersPieChart.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        season: PropTypes.number,
        totalGoals: PropTypes.number,
        totalFouls: PropTypes.number,
        shots: PropTypes.number,
        passes: PropTypes.number,
        statistics: PropTypes.arrayOf(
            PropTypes.shape({
                category: PropTypes.string,
                stats: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string,
                        value: PropTypes.string
                    })
                )
            })
        )
    })),
    sport: PropTypes.oneOf(["soccer", "american-football"]).isRequired
};

export default PlayersPieChart;
