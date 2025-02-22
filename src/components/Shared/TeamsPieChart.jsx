import { useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const TeamsPieChart = ({ data }) => {
    const [selectedSeason, setSelectedSeason] = useState("All");

    if (!data || data.length === 0) {
        return <div className="text-white">No stats found</div>;
    }

    // Extract unique seasons from the data
    const seasons = ["All", ...new Set(data.map(item => String(item.season)))];

    // Filter data based on selected season
    const filteredData =
        selectedSeason === "All"
            ? data
            : data.filter(item => String(item.season) === selectedSeason);

    console.log("Filtered Data:", filteredData); // Debugging line

    // Aggregate home and away wins
    const totalHomeWins = filteredData.reduce(
        (acc, item) => acc + (item.fixtures?.wins?.home || 0),
        0
    );
    const totalAwayWins = filteredData.reduce(
        (acc, item) => acc + (item.fixtures?.wins?.away || 0),
        0
    );

    const aggregatedData = [
        { name: "Home Wins", value: totalHomeWins },
        { name: "Away Wins", value: totalAwayWins }
    ];

    const hasData = aggregatedData.some(({ value }) => value > 0);
    const colorScheme = ["#3B82F6", "#22C55E"];
    const { teamStatsLoading } = useSelector((state) => state.loading);

    return teamStatsLoading ? <Loading /> : (
        <div className="bg-secondary rounded-xl p-4 flex flex-col items-center h-full">
            {/* Season Dropdown */}
            <div className="h-full w-full flex justify-end items-center">
                <select
                    className="mb-4 outline-none px-4 py-2 text-white bg-gray-600  border-gray-600 rounded outline-none hover:bg-gray-700 transition-all"
                    value={selectedSeason}
                    onChange={(e) => setSelectedSeason(e.target.value)}
                >
                    {seasons.map((season) => (
                        <option key={season} value={season} className="bg-gray-900 text-white">
                            {season}
                        </option>
                    ))}
                </select>
            </div>


            {/* Pie Chart */}
            {hasData ? (
                <PieChart width={450} height={380}>
                    <Pie
                        data={aggregatedData}
                        dataKey="value"
                        cx="50%"
                        cy="45%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={5}
                        label={({ name, value }) => `${name}: ${value}`}
                        labelLine={false}
                    >
                        {aggregatedData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colorScheme[index % colorScheme.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none", color: "#fff" }} />
                    <Legend
                        align="center"
                        verticalAlign="bottom"
                        layout="horizontal"
                        iconType="circle"
                        wrapperStyle={{ fontSize: "12px", color: "white" }}
                    />
                </PieChart>
            ) : (
                <div className="text-white">No data available.</div>
            )}
        </div>
    );
};

// Prop validation
TeamsPieChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            season: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            fixtures: PropTypes.shape({
                wins: PropTypes.shape({
                    home: PropTypes.number,
                    away: PropTypes.number
                })
            })
        })
    ).isRequired
};

export default TeamsPieChart;
