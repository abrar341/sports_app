import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const EarningBarChart = ({ data }) => {
    if (!data || data.length === 0) {
        return <div className="text-white">No stats found</div>;
    }

    // Prepare data for the bar chart
    const chartData = data.map((item) => ({
        season: String(item.season),
        "Home Wins": item.fixtures?.wins?.home || 0,
        "Away Wins": item.fixtures?.wins?.away || 0,
    }));

    const { teamStatsLoading } = useSelector((state) => state.loading);

    return teamStatsLoading ? <Loading /> : (
        <div className="bg-secondary p-6 h-full rounded-lg">
            <h2 className="text-white text-xl font-semibold mb-4">Wins by Season</h2>
            <p className="text-blue-300 text-sm mb-4">Home vs Away Wins</p>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis
                        dataKey="season"
                        tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        cursor={{ fill: "rgba(59,130,246,0.2)" }}
                        contentStyle={{
                            backgroundColor: "#1E293B",
                            border: "none",
                            borderRadius: "5px",
                            color: "#FFFFFF",
                        }}
                        labelStyle={{ color: "#FFFFFF" }}
                    />
                    <Bar dataKey="Home Wins" fill="#3B82F6" barSize={20} radius={[5, 5, 0, 0]} />
                    <Bar dataKey="Away Wins" fill="#22C55E" barSize={20} radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

// EarningBarChart.propTypes = {
//     data: PropTypes.arrayOf(
//         PropTypes.shape({
//             season: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//             fixtures: PropTypes.shape({
//                 wins: PropTypes.shape({
//                     home: PropTypes.number,
//                     away: PropTypes.number,
//                 }),
//             }),
//         })
//     ).isRequired,
// };

export default EarningBarChart;