import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const GameInsightsData = [
    { date: "DEC 1", value1: 2.3, value2: 1.9 },
    { date: "DEC 2", value1: 1.5, value2: 0.7 },
    { date: "DEC 3", value1: 2.1, value2: 1.8 },
    { date: "DEC 4", value1: 1.6, value2: 1.2 },
    { date: "DEC 5", value1: 0.8, value2: 0.6 },
    { date: "DEC 6", value1: 2.2, value2: 1.9 },
    { date: "DEC 7", value1: 1.9, value2: 1.5 },
];

export const Statistics = () => {
    return (
        <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-white text-xl font-semibold">Statistics</h2>
            <p className="text-blue-300 text-sm mb-4">Game Insights</p>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={GameInsightsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis
                        dataKey="date"
                        tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        domain={[0, 2.5]}
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
                    <Bar dataKey="value1" fill="#3B82F6" barSize={20} radius={[5, 5, 0, 0]} />
                    <Bar dataKey="value2" fill="#8B5CF6" barSize={20} radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

