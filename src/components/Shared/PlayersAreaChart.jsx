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

const PlayersAreaChart = ({ data }) => {
    const { playerStatsLoading } = useSelector((state) => state.loading);

    return playerStatsLoading ? <Loading /> : (
        <div className="bg-secondary rounded-xl  p-4">
            {data ? <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 40, bottom: 40 }}
                >
                    <CartesianGrid strokeDasharray="2 2" stroke="#3b4c7c" horizontal vertical={false} />

                    {/* X Axis (Seasons) */}
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
                            dy: 25, // Adjust position
                        }}
                    />

                    {/* Y Axis (Goals) */}
                    <YAxis
                        tick={{ fill: "#d1d5db", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        label={{
                            value: "Goals",
                            angle: -90,
                            position: "left",
                            fill: "#d1d5db",
                            fontSize: 14,
                            dx: -30, // Adjust position
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

                    <Area
                        type="monotone"
                        dataKey="totalGoals"
                        stroke="#60a5fa"
                        fill="url(#colorGoals)"
                        strokeWidth={2}
                    />

                    <defs>
                        <linearGradient id="colorGoals" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#1e40af" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                </AreaChart>
            </ResponsiveContainer> : <div className="text-center">No stats to show on chart</div>}
        </div>

    );
};


export default PlayersAreaChart;
