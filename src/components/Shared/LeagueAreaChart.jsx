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
import { EmptyState } from "./EmptyState";
import { FaRegSadTear } from "react-icons/fa";

const LeagueAreaChart = ({ gameType }) => {
    const { favoritePlayersHighlightsLoading } = useSelector((state) => state.loading);
    const data = useSelector((state) => state.favorites?.favoriteLeaguessHighlights);

    // Extract unique seasons and league names
    const uniqueSeasons = [...new Set(data.map((league) => league.season))];
    const uniqueLeagues = [...new Set(data.map((league) => league.leagueName))];

    // State for selected season and league
    const [selectedSeason, setSelectedSeason] = useState(null);
    const [selectedLeague, setSelectedLeague] = useState(null);

    useEffect(() => {
        if (data.length > 0) {
            const updatedSeasons = [...new Set(data.map((league) => league.season))];
            const updatedLeagues = [...new Set(data.map((league) => league.leagueName))];

            if (updatedSeasons.length > 0) {
                setSelectedSeason((prevSeason) =>
                    updatedSeasons.includes(prevSeason) ? prevSeason : updatedSeasons[0]
                );
            }
            if (updatedLeagues.length > 0) {
                setSelectedLeague((prevLeague) =>
                    updatedLeagues.includes(prevLeague) ? prevLeague : updatedLeagues[0]
                );
            }
        }
    }, [data, gameType]); // Also run this effect when `gameType` changes


    // Filter and format data for the chart
    const filteredData = data
        .filter((league) => league.season === selectedSeason && league.leagueName === selectedLeague)
        .flatMap((league) =>
            league.standings.map((team) => ({
                season: league.season,
                leagueName: league.leagueName,
                teamName: team.team.name,
                points: gameType === "soccer" ? team.points : team.points?.for,
                goalsDiff: gameType === "soccer" ? team.goalsDiff : team.points?.difference,
            }))
        );

    return favoritePlayersHighlightsLoading ? (
        <Loading />
    ) : (
        <div className="bg-secondary h-full rounded-xl p-4">
            {/* Dropdown Selectors */}
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
                        className="bg-blue-700 w-[100px] md:w-full text-white px-3 py-2 rounded outline-none cursor-pointer"
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

            {/* Chart or Empty State */}
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

                        {/* Y Axis (Points & Goal Difference / Points Scored & Point Differential) */}
                        <YAxis
                            tick={{ fill: "#d1d5db", fontSize: 12, margin: 100 }}
                            axisLine={false}
                            tickLine={false}
                            label={{
                                value: gameType === "soccer" ? "Points & Goal Difference" : "Points Scored & Differential",
                                angle: -90,
                                position: "left",
                                fill: "#d1d5db",
                                fontSize: 14,
                                dx: 0,
                                dy: -80,
                            }}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1f2937",
                                border: "none",
                                color: "#fff",
                            }}
                            cursor={{ fill: "rgba(96,165,250,0.2)" }}
                            formatter={(value, name) => {
                                if (name === "points") {
                                    return [`${value}`, gameType === "soccer" ? "Points" : "Points Scored"];
                                }
                                if (name === "goalsDiff") {
                                    return [`${value}`, gameType === "soccer" ? "Goal Difference" : "Point Differential"];
                                }
                                return [value, name];
                            }}
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

                        {/* Gradient Definitions */}
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
                <EmptyState icon={FaRegSadTear} message="No league to show for now." />
            )}
        </div>
    );
};

LeagueAreaChart.propTypes = {
    gameType: PropTypes.oneOf(["soccer", "american-football"]).isRequired, // Specify either "soccer" or "football"
};

export default LeagueAreaChart;
