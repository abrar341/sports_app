import React, { useState } from "react";
import {
    FaTshirt, FaClock, FaFutbol, FaShoePrints, FaCheckCircle, FaTimesCircle,
    FaBullseye, FaExclamationTriangle, FaFootballBall, FaRunning, FaHandHoldingUsd
} from "react-icons/fa";
import { useSelector } from "react-redux";
import Loading from "../Shared/Loading";

const PlayerStatistics = ({ data, sportType }) => {
    const [selectedStat, setSelectedStat] = useState(0);
    const { playerStatsLoading, playerProfileLoading } = useSelector((state) => state.loading);

    if (!data || data.length === 0) {
        return <p className="text-center bg-secondary p-6 rounded-xl text-lg">Stats not available for this player.</p>;
    }

    const handleStatClick = (index) => {
        if (selectedStat !== index) {
            setSelectedStat(index);
        }
    };

    return playerProfileLoading ? <Loading /> : (
        <div className="bg-secondary p-6 rounded-xl">
            <div className="flex flex-wrap gap-4 overflow-x-auto">
                {data.map((stat, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer px-4 py-2 rounded-lg shadow-md ${selectedStat === index ? 'bg-blue-900' : ''}`}
                        onClick={() => handleStatClick(index)}
                    >
                        <div className="flex items-center space-x-2">
                            <h2 className="text-base font-semibold text-white">Season {stat.season}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {selectedStat !== null && (
                <div className="mt-6 bg-secondary dark:bg-gray-800 rounded-lg shadow-md">
                    {sportType === "soccer" ? renderSoccerStats(data[selectedStat]) : renderFootballStats(data[selectedStat])}
                </div>
            )}
        </div>
    );
};

// ⚽ Soccer Stats Renderer
const renderSoccerStats = (stat) => (
    <div className="grid grid-cols1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <StatCard title="Games" icon={<FaTshirt className="text-blue-500" />}>
            <StatItem label="Matches Played" value={stat.lineups || 0} />
            <StatItem label="Minutes Played" value={stat.totalMinutesPlayed || 0} />
        </StatCard>

        <StatCard title="Goals & Assists" icon={<FaFutbol className="text-yellow-500" />}>
            <StatItem label="Goals Scored" value={stat.totalGoals || 0} />
            <StatItem label="Shots" value={stat.shots || 0} />
        </StatCard>

        <StatCard title="Passing" icon={<FaShoePrints className="text-purple-500" />}>
            <StatItem label="Total Passes" value={stat.passes || 0} />
        </StatCard>

        <StatCard title="Defending" icon={<FaBullseye className="text-red-500" />}>
            <StatItem label="Tackles" value={stat.tackles || 0} />
            <StatItem label="Duels" value={stat.duels || 0} />
        </StatCard>

        <StatCard title="Dribbles" icon={<FaCheckCircle className="text-teal-500" />}>
            <StatItem label="Dribbles" value={stat.dribbles || 0} />
        </StatCard>

        {/* <StatCard title="Discipline" icon={<FaExclamationTriangle className="text-orange-500" />}>
            <StatItem label="Yellow Cards" value={stat.cards.yellow || 0} />
            <StatItem label="Red Cards" value={stat.cards.red || 0} />
        </StatCard> */}

        <StatCard title="Fouls" icon={<FaTimesCircle className="text-gray-500" />}>
            <StatItem label="Total Fouls" value={stat.totalFouls || 0} />
        </StatCard>
    </div>
);


const renderFootballStats = (stat) => (
    <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
        {stat.statistics.map((category) => (
            <StatCard key={category._id} title={category.category} icon={<FaFootballBall className="text-red-500" />}>
                {category.stats.slice(0, 5).map((item) => (
                    <StatItem key={item._id} label={item.name} value={item.value} />
                ))}
            </StatCard>
        ))}
    </div>
);


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

export default PlayerStatistics;


