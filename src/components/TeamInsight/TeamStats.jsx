import React, { useState, useEffect } from "react";
import Loading from "../Shared/Loading";
import { useSelector } from "react-redux";

const TeamStatistics = ({ statsData }) => {

    const leagues = {
        39: "Premier League",
        253: "Major League Soccer",
        2: "UEFA Champions League",
        15: "FIFA Club World Cup"
    };

    const getLeagueName = (id) => leagues[id] || "Unknown League";

    const { teamStatsLoading } = useSelector((state) => state.loading); // Get loading states

    if (!statsData || statsData.length === 0) {
        return <div className="p-6 bg-secondary rounded-xl py-8 text-white">No data available</div>;
    }

    // Extract unique leagues
    const uniqueLeagues = [...new Set(statsData.map((s) => s.league))];

    // State for selected league and season
    const [selectedLeague, setSelectedLeague] = useState("");
    const [selectedSeason, setSelectedSeason] = useState("");

    // Update league and season when statsData changes
    useEffect(() => {
        if (uniqueLeagues.length > 0) {
            const newSelectedLeague = uniqueLeagues[0]; // Set first league as default
            setSelectedLeague(newSelectedLeague);

            const newSeasons = [...new Set(
                statsData.filter((s) => s.league === newSelectedLeague).map((s) => s.season)
            )].sort((a, b) => b - a);

            setSelectedSeason(newSeasons[0] || "");
        }
    }, [statsData]); // Runs whenever statsData changes

    // Extract seasons only for the selected league and sort them
    const seasonsForSelectedLeague = [...new Set(
        statsData.filter((s) => s.league === selectedLeague).map((s) => s.season)
    )].sort((a, b) => b - a);

    // Update season options when league changes
    const handleLeagueChange = (e) => {
        const newLeague = e.target.value;
        setSelectedLeague(newLeague);

        const newSeasons = [...new Set(statsData.filter((s) => s.league === newLeague).map((s) => s.season))]
            .sort((a, b) => b - a);

        setSelectedSeason(newSeasons[0] || "");
    };

    // Filter stats based on selected league and season
    const filteredStats = statsData.find(
        (s) => String(s.league) === String(selectedLeague) && String(s.season) === String(selectedSeason)
    );

    return teamStatsLoading ? <Loading /> : (
        <div className="p-6 bg-secondary rounded-xl py-8">
            <div className="mb-6 flex justify-end gap-3 items-center">
                {/* League Selection */}
                <div className="flex flex-col sm:flex-row items-center gap-2">

                    <label className="text-white font-semibold">Select League</label>
                    <select
                        className="px-3 py-2 outline-none bg-[#07234B] text-white rounded"
                        value={selectedLeague}
                        onChange={handleLeagueChange}
                    >
                        {uniqueLeagues.map((leagueId, index) => (
                            <option key={index} value={leagueId}>
                                {getLeagueName(leagueId)}
                            </option>
                        ))}

                    </select>
                </div>

                {/* Season Selection */}
                <div className="flex flex-col sm:flex-row items-center gap-2">

                    <label className="text-white font-semibold">Select Season</label>
                    <select
                        className="px-3 py-2 bg-[#07234B] text-white rounded"
                        value={selectedSeason}
                        onChange={(e) => setSelectedSeason(e.target.value)}
                    >
                        {seasonsForSelectedLeague.map((season, index) => (
                            <option key={index} value={season}>
                                {season}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {filteredStats ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard title="League" icon="🏆">
                        <StatItem label="League" value={filteredStats.league || "N/A"} />
                        <StatItem label="Form" value={filteredStats.form || "N/A"} />
                    </StatCard>
                    <StatCard title="Fixtures" icon="📅">
                        <StatItem label="Played" value={filteredStats.fixtures?.played?.total || 0} />
                        <StatItem label="Wins" value={filteredStats.fixtures?.wins?.total || 0} />
                        <StatItem label="Draws" value={filteredStats.fixtures?.draws?.total || 0} />
                        <StatItem label="Losses" value={filteredStats.fixtures?.loses?.total || 0} />
                    </StatCard>
                    <StatCard title="Goals" icon="⚽">
                        <StatItem label="Scored" value={filteredStats.goals?.for?.total?.total || 0} />
                        <StatItem label="Conceded" value={filteredStats.goals?.against?.total?.total || 0} />
                    </StatCard>
                    <StatCard title="Biggest Results" icon="🔥">
                        <StatItem label="Biggest Win Home" value={filteredStats.biggest?.wins?.home || "N/A"} />
                        <StatItem label="Biggest Win Away" value={filteredStats.biggest?.wins?.away || "N/A"} />
                        <StatItem label="Biggest Loss Home" value={filteredStats.biggest?.loses?.home || "N/A"} />
                        <StatItem label="Biggest Loss Away" value={filteredStats.biggest?.loses?.away || "N/A"} />
                    </StatCard>
                </div>
            ) : (
                <div className="text-white text-center">No data found for the selected League and Season</div>
            )}
        </div>
    );
};

const StatCard = ({ title, icon, children }) => (
    <div className="bg-[#07234B] p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white flex items-center space-x-2 mb-3">
            {icon} <span>{title}</span>
        </h3>
        {children}
    </div>
);

const StatItem = ({ label, value }) => (
    <div className="flex justify-between py-2 border-b last:border-b-0 border-gray-300 dark:border-gray-700">
        <span className="font-semibold text-white text-sm">{label}:</span>
        <span className="text-white text-sm break-words whitespace-normal text-right max-w-[150px]">
            {value}
        </span>    </div>
);

export default TeamStatistics;
