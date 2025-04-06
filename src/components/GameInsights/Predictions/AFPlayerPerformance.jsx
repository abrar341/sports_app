import { AlertTriangle, Medal, Star, Target, User } from 'lucide-react';
import React from 'react';

const AFPlayerPerformance = ({ playerPerformance }) => {
    return (
        <div className='bg-secondary p-6 md:p-8 rounded-xl shadow-lg'>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-100 uppercase tracking-wide">
                Player Performances
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {playerPerformance.map((player) => (
                    <div key={player.player.id} className="p-6 rounded-lg border border-gray-500 ">

                        {/* Player Info */}
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-lg font-semibold flex items-center text-gray-200">
                                    <User className="w-5 h-5 mr-2 text-gray-400" /> {player.player.name} ({player.player.position})
                                </h3>
                                <p className="text-sm text-gray-400">{player.player.team}</p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="space-y-2 text-sm text-gray-300 font-medium">

                            {/* Passing Stats */}
                            <div className="p-4 rounded-lg  border border-gray-500">
                                <span className="flex items-center font-semibold text-blue-400">
                                    <Target className="w-4 h-4 mr-2" /> Passing:
                                </span>
                                <p>Yards: {player.stats.passing.yards}, TDs: {player.stats.passing.touchdowns}, INTs: {player.stats.passing.interceptions}, Completion: {player.stats.passing.completionPercentage}%</p>
                            </div>

                            {/* Rushing Stats */}
                            <div className="p-4 rounded-lg border border-gray-500 ">
                                <span className="flex items-center font-semibold text-green-400">
                                    <Target className="w-4 h-4 mr-2" /> Rushing:
                                </span>
                                <p>Yards: {player.stats.rushing.yards}, TDs: {player.stats.rushing.touchdowns}, YPC: {player.stats.rushing.yardsPerCarry || 'N/A'}</p>
                            </div>

                            {/* Receiving Stats */}
                            <div className="p-4 rounded-lg border border-gray-500 ">
                                <span className="flex items-center font-semibold text-yellow-400">
                                    <Star className="w-4 h-4 mr-2" /> Receiving:
                                </span>
                                <p>Receptions: {player.stats.receiving.receptions}, Yards: {player.stats.receiving.yards}, TDs: {player.stats.receiving.touchdowns}</p>
                            </div>

                            {/* Defensive Stats */}
                            <div className="p-4 rounded-lg border border-gray-500 ">
                                <span className="flex items-center font-semibold text-red-400">
                                    <AlertTriangle className="w-4 h-4 mr-2" /> Defense:
                                </span>
                                <p>Sacks: {player.stats.defense.sacks}, INTs: {player.stats.defense.interceptions}, Forced Fumbles: {player.stats.defense.forcedFumbles}, Tackles: {player.stats.defense.tackles}</p>
                            </div>

                            {/* Special Teams Stats */}
                            <div className="p-4 rounded-lg border border-gray-500 ">
                                <span className="flex items-center font-semibold text-purple-400">
                                    <Target className="w-4 h-4 mr-2" /> Special Teams:
                                </span>
                                <p>FG Made: {player.stats.specialTeams.fieldGoalsMade}, FG %: {player.stats.specialTeams.fieldGoalPercentage || 'N/A'}, Kickoff Returns: {player.stats.specialTeams.kickoffReturns}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AFPlayerPerformance;
