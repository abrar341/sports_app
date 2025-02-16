import { useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import PropTypes from "prop-types";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const PlayersPieChart = ({ stats }) => {
    const [selectedSeason, setSelectedSeason] = useState("All");

    // Extract unique seasons from stats
    const seasons = [...new Set(stats?.map(season => season.season))];

    const getAggregatedData = () => {
        // Ensure `stats` is an array
        if (!Array.isArray(stats)) {
            return [];
        }

        const filteredStats = selectedSeason === "All"
            ? stats
            : stats.filter(season => season.season === Number(selectedSeason));


        return [
            { name: "Goals", value: filteredStats.reduce((acc, season) => acc + (season.totalGoals || 0), 0) },
            { name: "Fouls", value: filteredStats.reduce((acc, season) => acc + (season.totalFouls || 0), 0) },
            { name: "Shots", value: filteredStats.reduce((acc, season) => acc + (season.shots || 0), 0) },
            { name: "Passes", value: filteredStats.reduce((acc, season) => acc + (season.passes || 0), 0) }
        ];
    };




    const aggregatedData = getAggregatedData();
    const colorScheme = ["#3B82F6", "#22C55E", "#9CA3AF", "#3B82F6"];

    const { playerStatsLoading } = useSelector((state) => state.loading);

    return playerStatsLoading ? <Loading /> : (
        <div className="bg-secondary rounded-lg p-4 flex flex-col items-center h-full">
            {/* Season Selection */}
            {
                stats ?
                    <>
                        <div className="mb-4 flex space-x-2">
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
                    </> :
                    <div>No stats found</div>
            }
        </div>
    );
};

// Prop validation
PlayersPieChart.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            year: PropTypes.number,
            totalGoals: PropTypes.number,
            totalFouls: PropTypes.number,
            shots: PropTypes.number,
            passes: PropTypes.number
        })
    ),
};

export default PlayersPieChart;
