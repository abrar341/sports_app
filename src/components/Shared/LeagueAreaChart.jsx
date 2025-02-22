import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const LeagueAreaChart = () => {
    const { favoritePlayersHighlightsLoading } = useSelector((state) => state.loading);
    const data = useSelector((state) => state.favorites?.favoriteLeaguessHighlights);

    // Extract unique seasons and league names
    const uniqueSeasons = [...new Set(data.map((league) => league.season))];
    const uniqueLeagues = [...new Set(data.map((league) => league.leagueName))];
    console.log(uniqueSeasons, uniqueLeagues);

    // State for selected season and league
    const [selectedSeason, setSelectedSeason] = useState(null);
    const [selectedLeague, setSelectedLeague] = useState(null);
    console.log("selectedSeason", selectedSeason);
    console.log("selectedLeague", selectedLeague);

    // Update selectedSeason and selectedLeague when data becomes available
    useEffect(() => {
        if (uniqueSeasons.length > 0 && !selectedSeason) {
            setSelectedSeason(uniqueSeasons[0]);
        }
        if (uniqueLeagues.length > 0 && !selectedLeague) {
            setSelectedLeague(uniqueLeagues[0]);
        }
    }, [data]); // Runs whenever `data` updates

    // Filter data based on selected season and league name
    const filteredData = data
        .filter((league) => league.season === selectedSeason && league.leagueName === selectedLeague)
        .flatMap((league) =>
            league.standings.map((team) => ({
                season: league.season,
                leagueName: league.leagueName,
                teamName: team.team.name,
                rank: team.rank,
                points: team.points,
                goalsDiff: team.goalsDiff,
            }))
        );

    return favoritePlayersHighlightsLoading ?
        <Loading />
        : (
            <div className="bg-secondary h-full rounded-xl p-4">
                <div className="mb-4 flex justify-end gap-4">
                    {/* Season Dropdown */}
                    <div>
                        <select
                            className="bg-blue-700 text-white px-3 py-2 rounded outline-none cursor-pointer"
                            value={selectedSeason || ""}
                            onChange={(e) => setSelectedSeason(Number(e.target.value))}
                            disabled={uniqueSeasons.length === 0} // Disable if no data
                        >
                            {uniqueSeasons.map((season) => (
                                <option key={season} value={season}>
                                    {season}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* League Dropdown */}
                    <div>
                        <select
                            className="bg-blue-700 text-white px-3 py-2 rounded outline-none cursor-pointer"
                            value={selectedLeague || ""}
                            onChange={(e) => setSelectedLeague(e.target.value)}
                            disabled={uniqueLeagues.length === 0} // Disable if no data
                        >
                            {uniqueLeagues.map((league) => (
                                <option key={league} value={league}>
                                    {league}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {filteredData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={350}>
                        <AreaChart
                            data={filteredData}
                            margin={{ top: 20, right: 30, left: 40, bottom: 40 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#3b4c7c" horizontal vertical={false} />

                            {/* X Axis (Team Names) */}
                            <XAxis
                                dataKey="teamName"
                                tick={{ fill: "#d1d5db", fontSize: 12 }}
                                axisLine={false}
                                tickLine={false}
                                angle={-45}
                                textAnchor="end"
                            />

                            {/* Y Axis (Points & Goal Difference) */}
                            <YAxis
                                tick={{ fill: "#d1d5db", fontSize: 12 }}
                                axisLine={false}
                                tickLine={false}
                                label={{
                                    value: "Performance",
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

                            <Legend verticalAlign="top" align="center" wrapperStyle={{ paddingBottom: 20 }} />

                            {/* Stacked Areas */}
                            <Area
                                type="monotone"
                                dataKey="points"
                                stackId="1"
                                stroke="#60a5fa"
                                fill="url(#colorPoints)"
                                strokeWidth={2}
                            />

                            <Area
                                type="monotone"
                                dataKey="goalsDiff"
                                stackId="1"
                                stroke="#facc15"
                                fill="url(#colorGoals)"
                                strokeWidth={2}
                            />

                            <defs>
                                <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#1e40af" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorGoals" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#facc15" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#92400e" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </AreaChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="text-center text-white font-semibold  h-full mt-6">No stats to show for this selection</div>
                )}
            </div>
        );
};

// LeagueStackedAreaChart.propTypes = {
//     data: PropTypes.arrayOf(
//         PropTypes.shape({
//             season: PropTypes.number.isRequired,
//             leagueName: PropTypes.string.isRequired,
//             standings: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     team: PropTypes.object.isRequired,
//                     rank: PropTypes.number.isRequired,
//                     points: PropTypes.number.isRequired,
//                     goalsDiff: PropTypes.number.isRequired,
//                 })
//             ).isRequired,
//         })
//     ).isRequired,
// };

export default LeagueAreaChart;