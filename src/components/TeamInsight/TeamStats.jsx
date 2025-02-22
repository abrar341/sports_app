import React, { useState } from "react";
import Loading from "../Shared/Loading";
import { useSelector } from "react-redux";

const TeamStatistics = ({ statsData }) => {
    const { teamStatsLoading } = useSelector((state) => state.loading); // Get loading states

    if (!statsData || statsData.length === 0) {
        return <div className="p-6 bg-secondary rounded-xl py-8 text-white">No data available</div>;
    }

    // Ensure initial state matches the correct type
    const [selectedSeason, setSelectedSeason] = useState(statsData[0]?.season || "");

    // Find the correct stats based on the selected season
    const stats = statsData?.find((s) => String(s.season) === String(selectedSeason)) || statsData[0];

    return teamStatsLoading ? <Loading /> : (
        <div className="p-6 bg-secondary rounded-xl py-8">
            {teamStatsLoading ? <Loading /> :
                <>
                    <div className="mb-6 flex justify-end gap-1 items-center">
                        <label className="text-white font-semibold mr-2">Select Season</label>
                        <select
                            className="px-3 py-2 bg-[#07234B] text-white rounded"
                            value={selectedSeason}
                            onChange={(e) => setSelectedSeason(e.target.value)}
                        >
                            {statsData.map((s, index) => (
                                <option key={index} value={s.season}>
                                    {s.season}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
                        <StatCard title="League" icon="🏆">
                            <StatItem label="League" value={stats.league || "N/A"} />
                            <StatItem label="Form" value={stats.form || "N/A"} />
                        </StatCard>
                        <StatCard title="Fixtures" icon="📅">
                            <StatItem label="Played" value={stats.fixtures?.played?.total || 0} />
                            <StatItem label="Wins" value={stats.fixtures?.wins?.total || 0} />
                            <StatItem label="Draws" value={stats.fixtures?.draws?.total || 0} />
                            <StatItem label="Losses" value={stats.fixtures?.loses?.total || 0} />
                        </StatCard>
                        <StatCard title="Goals" icon="⚽">
                            <StatItem label="Scored" value={stats.goals?.for?.total?.total || 0} />
                            <StatItem label="Conceded" value={stats.goals?.against?.total?.total || 0} />
                        </StatCard>
                        <StatCard title="Biggest Results" icon="🔥">
                            <StatItem label="Biggest Win Home" value={stats.biggest?.wins?.home || "N/A"} />
                            <StatItem label="Biggest Win Away" value={stats.biggest?.wins?.away || "N/A"} />
                            <StatItem label="Biggest Loss Home" value={stats.biggest?.loses?.home || "N/A"} />
                            <StatItem label="Biggest Loss Away" value={stats.biggest?.loses?.away || "N/A"} />
                        </StatCard>
                    </div>
                </>
            }
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
        <span className="text-white text-sm">{value}</span>
    </div>
);

export default TeamStatistics;
