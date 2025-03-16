import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";


const RosterAreaChart = ({ data }) => {

    const [filter, setFilter] = useState("goals"); // Toggle between goals and penalties
    const { teamStatsLoading } = useSelector((state) => state.loading);

    if (!data || data.length === 0) {
        return <div className="text-center text-white">No stats to show on chart</div>;
    }

    // Function to merge stats of same seasons
    const mergeSeasonStats = (data) => {
        const mergedStats = {};

        data.forEach((item) => {
            const { season } = item;

            if (!mergedStats[season]) {
                mergedStats[season] = {
                    season,
                    homeGoals: 0,
                    awayGoals: 0,
                    scoredPenalties: 0,
                    missedPenalties: 0,
                };
            }

            mergedStats[season].homeGoals += item.goals?.for?.total?.home || 0;
            mergedStats[season].awayGoals += item.goals?.for?.total?.away || 0;
            mergedStats[season].scoredPenalties += item.penalty?.scored?.total || 0;
            mergedStats[season].missedPenalties += item.penalty?.missed?.total || 0;
        });

        return Object.values(mergedStats);
    };

    // Use this function to process your data
    const formattedData = mergeSeasonStats(data);


    return teamStatsLoading ? <Loading /> : (
        <div className="bg-secondary h-full rounded-xl p-4">
            {/* Filter Buttons */}
            <div className="flex justify-end gap-2 mb-4">
                <button
                    className={`px-4 py-1 rounded ${filter === "goals" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}
                    onClick={() => setFilter("goals")}
                >
                    Goals
                </button>
                <button
                    className={`px-4 py-1 rounded ${filter === "penalties" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}
                    onClick={() => setFilter("penalties")}
                >
                    Penalties
                </button>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={formattedData} margin={{ top: 20, right: 30, left: 40, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3b4c7c" />
                    <XAxis
                        dataKey="season"
                        tick={{ fill: "#d1d5db", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        label={{
                            value: "Seasons",
                            position: "bottom",
                            fill: "#d1d5db",
                            fontSize: 14,
                            dy: 25,
                        }}
                    />
                    <YAxis
                        tick={{ fill: "#d1d5db", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        label={{
                            value: filter === "goals" ? "Goals" : "Penalties",
                            angle: -90,
                            position: "left",
                            fill: "#d1d5db",
                            fontSize: 14,
                            dx: -30,
                        }}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#1f2937", border: "none", color: "#fff" }}
                        cursor={{ strokeDasharray: "3 3", stroke: "#3b82f6" }}
                    />
                    <Legend
                        verticalAlign="top"
                        align="center"
                        wrapperStyle={{ color: "#d1d5db", fontSize: 12, marginBottom: 10 }}
                    />
                    <Line
                        type="monotone"
                        dataKey={filter === "goals" ? "homeGoals" : "scoredPenalties"}
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: "#3b82f6", r: 5 }}
                        activeDot={{ r: 7 }}
                        name={filter === "goals" ? "Home Goals" : "Scored Penalties"}
                    />
                    <Line
                        type="monotone"
                        dataKey={filter === "goals" ? "awayGoals" : "missedPenalties"}
                        stroke="#ef4444"
                        strokeWidth={2}
                        dot={{ fill: "#ef4444", r: 5 }}
                        activeDot={{ r: 7 }}
                        name={filter === "goals" ? "Away Goals" : "Missed Penalties"}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

// RosterAreaChart.propTypes = {
//     data: PropTypes.arrayOf(
//         PropTypes.shape({
//             season: PropTypes.string,
//             goals: PropTypes.shape({
//                 for: PropTypes.shape({
//                     total: PropTypes.shape({
//                         home: PropTypes.number,
//                         away: PropTypes.number,
//                     }),
//                 }),
//             }),
//             penalty: PropTypes.shape({
//                 scored: PropTypes.shape({
//                     total: PropTypes.number,
//                 }),
//                 missed: PropTypes.shape({
//                     total: PropTypes.number,
//                 }),
//             }),
//         })
//     ),
// };

export default RosterAreaChart;
