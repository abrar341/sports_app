// export const WinLossTrends = () => {
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import PropTypes from "prop-types";

export const WinLossTrends = () => {
    const data = [
        { name: "Home Wins", value: 70 },
        { name: "Away Wins", value: 30 }
    ];
    // Colors matching the image
    const colorScheme = ["#3B82F6", "#22C55E"]; // Blue, Green

    return (
        <div className="bg-secondary rounded-lg p-4 flex flex-col items-center h-full">
            <h2 className="text-white font-semibold mb-2">Win/Loss Trends Over Time</h2>
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={2}
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colorScheme[index % colorScheme.length]} />
                    ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none", color: "#fff" }} />
                <Legend align="center" verticalAlign="bottom" iconType="circle" wrapperStyle={{ color: "white" }} />
            </PieChart>
        </div>
    );
};

// WinLossPieChart.propTypes = {
//     data: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             value: PropTypes.number.isRequired,
//         })
//     ).isRequired,
// };

