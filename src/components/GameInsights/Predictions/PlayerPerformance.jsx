import { AlertTriangle, Medal, Star, Target, User } from 'lucide-react'
import React from 'react'

const PlayerPerformance = ({ playerPerformance }) => {
    return (
        <div className='bg-secondary p-6 md:p-8 rounded-xl'>
            <h2 className="text-xl font-bold mb-6 text-center text-gray-100 uppercase tracking-wide">
                Player Performances
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {playerPerformance.map((player) => (
                    <div key={player.player.id} className=" p-6 rounded-lg  border border-gray-500">

                        {/* Player Info */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold flex items-center text-gray-200">
                                    <User className="w-5 h-5 mr-2 text-gray-200" /> {player.player.name}
                                </h3>
                                <p className="text-sm text-gray-200">{player.player.team}</p>
                            </div>

                            {player.manOfTheMatch && (
                                <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full flex items-center">
                                    <Star className="w-4 h-4 mr-1 text-yellow-300" /> Man of the Match
                                </span>
                            )}
                        </div>

                        {/* Stats */}
                        <div className="mt-4 text-sm text-gray-200 font-medium">

                            {/* Goals */}
                            <div className="flex justify-between  p-3 rounded-lg  border-blue-500 ">
                                <span className="flex items-center">
                                    <Target className="w-4 h-4 mr-2 " /> Goals:
                                </span>
                                <span className="">
                                    {player.goals.anytime && "Anytime"} {player.goals.first && " | First"} {player.goals.last && " | Last"}
                                </span>
                            </div>

                            {/* Shots on Target */}
                            <div className="flex justify-between p-3 rounded-lg  border-yellow-500 ">
                                <span className="flex items-center">
                                    <Target className="w-4 h-4 mr-2 " /> Shots on Target:
                                </span>
                                <span className="">{player.shots.onTarget} / {player.shots.total}</span>
                            </div>

                            {/* Assists */}
                            <div className="flex justify-between  p-3 rounded-lg  border-green-500 ">
                                <span className="flex items-center">
                                    <Medal className="w-4 h-4 mr-2 " /> Assists:
                                </span>
                                <span className="">{player.assists}</span>
                            </div>

                            {/* Cards */}
                            <div className="flex justify-between  p-3 rounded-lg  border-red-500 ">
                                <span className="flex items-center">
                                    <AlertTriangle className="w-4 h-4 mr-2 " /> Cards:
                                </span>
                                <span className="">
                                    {player.cards.yellow ? "Yellow" : ""}
                                    {player.cards.red ? " | Red" : ""}
                                    {!player.cards.yellow && !player.cards.red ? "None" : ""}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlayerPerformance
