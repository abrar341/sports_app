import React from 'react';
import {
    Trophy,
    ShieldCheck,
    MoveUpRight,
    Timer,
    TrendingUp,
    Target,
    ShieldPlus,
    Move,
    CircleDot
} from 'lucide-react';

export const AFTeamPerformance = ({ afTeamPerformance }) => {
    return (
        <div className='bg-secondary p-6 md:p-8 rounded-xl text-white'>
            <h2 className="text-xl uppercase font-bold tracking-wide text-gray-200 text-center mb-4">
                Team Performance
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-gray-300">
                {/* Total Points */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <Trophy size={24} />
                    <span>Total Points</span>
                    <span className="text-lg font-bold text-white">{afTeamPerformance.totalPoints}</span>
                </div>

                {/* Turnovers Forced */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <ShieldCheck size={24} />
                    <span>Turnovers Forced</span>
                    <span className="text-lg font-bold text-white">{afTeamPerformance.turnoversForced}</span>
                </div>

                {/* Total Yards Gained */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <MoveUpRight size={24} />
                    <span>Total Yards Gained</span>
                    <span className="text-lg font-bold text-white">{afTeamPerformance.totalYardsGained}</span>
                </div>

                {/* Time of Possession */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <Timer size={24} />
                    <span>Time of Possession</span>
                    <span className="text-lg font-bold text-white">{afTeamPerformance.timeOfPossession} min</span>
                </div>

                {/* Third Down Conversions */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <TrendingUp size={24} />
                    <span>3rd Down Conversions</span>
                    <span className="text-lg font-bold text-white">{afTeamPerformance.thirdDownConversions}</span>
                </div>

                {/* Red Zone Efficiency */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <Target size={24} />
                    <span>Red Zone Efficiency</span>
                    <span className="text-lg font-bold text-white">{afTeamPerformance.redZoneEfficiency}%</span>
                </div>

                {/* Defensive Touchdowns */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <ShieldPlus size={24} />
                    <span>Defensive Touchdowns</span>
                    <span className="text-lg font-bold text-white">{afTeamPerformance.defensiveTouchdowns}</span>
                </div>

                {/* Special Teams: Return Yards */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <Move size={24} />
                    <span>Return Yards</span>
                    <span className="text-lg font-bold text-white">{afTeamPerformance.specialTeamsPerformance.returnYards}</span>
                </div>

                {/* Special Teams: Field Goals */}
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600">
                    <CircleDot size={24} />
                    <span>Field Goals</span>
                    <span className="text-lg font-bold text-white">{afTeamPerformance.specialTeamsPerformance.fieldGoals}</span>
                </div>
            </div>
        </div>
    );
};

