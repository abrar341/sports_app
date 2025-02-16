import {
    AreaChart,
    Area,
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

const TeamAreaChart = ({ data }) => {
    const [filter, setFilter] = useState("wins"); // Toggle between wins, draws, and loses

    if (!data || data.length === 0) {
        return <div className="text-center text-white">No stats to show on chart</div>;
    }

    // Format data to include wins, draws, and loses for each season
    const formattedData = data.map((item) => ({
        season: item.season || "Unknown Season",
        wins: item.fixtures?.wins?.total || 0,
        draws: item.fixtures?.draws?.total || 0,
        loses: item.fixtures?.loses?.total || 0,
    }));

    const { teamStatsLoading } = useSelector((state) => state.loading);

    return teamStatsLoading ? <Loading /> : (
        <div className="bg-secondary rounded-xl p-4">
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={formattedData} margin={{ top: 20, right: 30, left: 40, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="2 2" stroke="#3b4c7c" />
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
                            value: "Matches",
                            angle: -90,
                            position: "left",
                            fill: "#d1d5db",
                            fontSize: 14,
                            dx: -30,
                        }}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#1f2937", border: "none", color: "#fff" }}
                        cursor={{ fill: "rgba(96,165,250,0.2)" }}
                    />
                    <Legend
                        verticalAlign="top"
                        align="center"
                        iconType="circle"
                        wrapperStyle={{ color: "#d1d5db", fontSize: 12, paddingBottom: 10 }}
                    />
                    <Area
                        type="monotone"
                        dataKey="wins"
                        stroke="#60a5fa"
                        fill="url(#colorWins)"
                        strokeWidth={2}
                        name="Wins"
                    />
                    <Line
                        type="monotone"
                        dataKey="wins"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: "#3B82F6", r: 4 }}
                        name="Wins"
                    />
                    <Area
                        type="monotone"
                        dataKey="draws"
                        stroke="#facc15"
                        fill="url(#colorDraws)"
                        strokeWidth={2}
                        name="Draws"
                    />
                    <Line
                        type="monotone"
                        dataKey="draws"
                        stroke="#eab308"
                        strokeWidth={2}
                        dot={{ fill: "#facc15", r: 4 }}
                        name="Draws"
                    />
                    <Area
                        type="monotone"
                        dataKey="loses"
                        stroke="#ef4444"
                        fill="url(#colorLoses)"
                        strokeWidth={2}
                        name="Loses"
                    />
                    <Line
                        type="monotone"
                        dataKey="loses"
                        stroke="#dc2626"
                        strokeWidth={2}
                        dot={{ fill: "#ef4444", r: 4 }}
                        name="Loses"
                    />
                    <defs>
                        <linearGradient id="colorWins" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#1e40af" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorDraws" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#facc15" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#b45309" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorLoses" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#7f1d1d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

// TeamAreaChart.propTypes = {
//     data: PropTypes.arrayOf(
//         PropTypes.shape({
//             season: PropTypes.string,
//             fixtures: PropTypes.shape({
//                 wins: PropTypes.shape({ total: PropTypes.number }),
//                 draws: PropTypes.shape({ total: PropTypes.number }),
//                 loses: PropTypes.shape({ total: PropTypes.number }),
//             }),
//         })
//     ),
// };

export default TeamAreaChart;
