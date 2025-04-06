import { CheckCircle, XCircle } from 'lucide-react'
import React from 'react'

const TeamPerformance = ({ teamPerformance }) => {
    return (
        <div className='bg-secondary p-6 md:p-8 rounded-xl text-white'>
            {/* Section Title */}
            <h2 className="text-xl uppercase font-bold tracking-wide text-gray-200 text-center mb-4">
                Team Performance
            </h2>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm text-gray-300">

                {/* Total Goals Over/Under */}
                <div className="flex flex-col gap-2 items-center p-4 rounded-lg border border-gray-600">
                    <span>Goals Over/Under ({teamPerformance.totalGoalsOverUnder.threshold})</span>
                    <span className={`text-lg font-bold ${teamPerformance.totalGoalsOverUnder.over ? "text-green-500" : "text-red-500"}`}>
                        {teamPerformance.totalGoalsOverUnder.over ? "Over" : "Under"}
                    </span>
                </div>

                {/* Clean Sheet (Home) */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <span>Clean Sheet (Home)</span>
                    {teamPerformance.cleanSheet.home ? (
                        <CheckCircle size={24} className="text-green-500" />
                    ) : (
                        <XCircle size={24} className="text-red-500" />
                    )}
                </div>

                {/* Clean Sheet (Away) */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <span>Clean Sheet (Away)</span>
                    {teamPerformance.cleanSheet.away ? (
                        <CheckCircle size={24} className="text-green-500" />
                    ) : (
                        <XCircle size={24} className="text-red-500" />
                    )}
                </div>

                {/* Both Teams to Score */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <span>Both Teams Scored</span>
                    {teamPerformance.bothTeamsToScore ? (
                        <CheckCircle size={24} className="text-green-500" />
                    ) : (
                        <XCircle size={24} className="text-red-500" />
                    )}
                </div>

                {/* Total Corners */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <span>Total Corners</span>
                    <span className="text-lg font-bold">{teamPerformance.totalCorners}</span>
                </div>

                {/* Total Fouls (Home) */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <span>Total Fouls (Home)</span>
                    <span className="text-lg font-bold">{teamPerformance.totalFouls.home}</span>
                </div>

                {/* Total Fouls (Away) */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <span>Total Fouls (Away)</span>
                    <span className="text-lg font-bold">{teamPerformance.totalFouls.away}</span>
                </div>

            </div>
        </div>
    )
}

export default TeamPerformance
