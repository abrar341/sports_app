import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const transformData = (data, sport) => {
    if (sport === "soccer") {
        return data.map((item) => ({
            season: item.season || "Unknown",
            value: Number(item.totalGoals) || 0, // Ensure numeric value
        }));
    } else if (sport === "american-football") {
        return data.map((item) => {
            const statistics = item.statistics || []; // Ensure it's an array
            const rushingStats = statistics.find((stat) => stat.category === "Rushing") || { stats: [] };
            const receivingStats = statistics.find((stat) => stat.category === "Receiving") || { stats: [] };
            const defenseStats = statistics.find((stat) => stat.category === "Defense") || { stats: [] };

            return {
                season: item.season || "Unknown",
                rushingYards: Number(rushingStats.stats?.find((s) => s.name === "yards")?.value || 0),
                rushingAttempts: Number(rushingStats.stats?.find((s) => s.name === "rushing attempts")?.value || 0),
                receptions: Number(receivingStats.stats?.find((s) => s.name === "receptions")?.value || 0),
                receivingYards: Number(receivingStats.stats?.find((s) => s.name === "receiving yards")?.value || 0),
                totalTackles: Number(defenseStats.stats?.find((s) => s.name === "total tackles")?.value || 0),
            };
        });
    }
    return [];
};



const PlayersAreaChart = ({ data, sportType }) => {
    const { playerStatsLoading } = useSelector((state) => state.loading);
    const transformedData = transformData(data, sportType);

    return playerStatsLoading ? (
        <Loading />
    ) : (
        <div className="bg-secondary rounded-xl p-4">
            {transformedData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={transformedData} margin={{ top: 20, right: 30, left: 40, bottom: 40 }}>
                        <CartesianGrid strokeDasharray="2 2" stroke="#3b4c7c" horizontal vertical={false} />

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
                                value: sportType === "soccer" ? "Goals" : "Yards",
                                angle: -90,
                                position: "left",
                                fill: "#d1d5db",
                                fontSize: 14,
                                dx: -30,
                            }}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1f2937",
                                border: "none",
                                color: "#fff",
                            }}
                            cursor={{ fill: "rgba(96,165,250,0.2)" }}
                        />

                        {sportType === "soccer" ? (
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#60a5fa"
                                fill="url(#colorGoals)"
                                strokeWidth={2}
                            />
                        ) : (
                            <>
                                <Area
                                    type="monotone"
                                    dataKey="rushingYards"
                                    stroke="#ff7f50"
                                    fill="url(#colorRushing)"
                                    strokeWidth={2}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="receivingYards"
                                    stroke="#60a5fa"
                                    fill="url(#colorReceiving)"
                                    strokeWidth={2}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="totalTackles"
                                    stroke="#32cd32"
                                    fill="url(#colorTackles)"
                                    strokeWidth={2}
                                />
                            </>
                        )}

                        <defs>
                            <linearGradient id="colorGoals" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#1e40af" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorRushing" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ff7f50" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#ff4500" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorReceiving" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#1e40af" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorTackles" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#32cd32" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#006400" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                    </AreaChart>
                </ResponsiveContainer>
            ) : (
                <div className="text-center">No stats to show on chart</div>
            )}
        </div>
    );
};

// PlayersAreaChart.propTypes = {
//     data: PropTypes.array.isRequired,
//     sportType: PropTypes.oneOf(["soccer", "american-football"]).isRequired,
// };

export default PlayersAreaChart;
