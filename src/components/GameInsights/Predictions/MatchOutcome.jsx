import { BarChart, Divide, Flag, Timer, Trophy } from 'lucide-react'
import React from 'react'

const MatchOutcome = ({ matchOutcome }) => {
    return (
        <div className='bg-secondary p-6 md:p-8 rounded-xl h-full '>
            <h2 className="text-xl font-bold mb-6 text-center text-gray-100 uppercase tracking-wide">
                Match Outcome Predictions
            </h2>

            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-base text-gray-200 font-medium">

                    {/* Win Probability */}
                    <div className="p-5  border border-green-600 rounded-lg ">
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <BarChart className="w-5 h-5 mr-2 text-gray-200" /> Win Probability
                        </h3>
                        <p className="text-green-700 text-sm">
                            🏠 Home: {matchOutcome.win.home}% | ✈️ Away: {matchOutcome.win.away}% | 🔄 Draw: {matchOutcome.win.draw}%
                        </p>
                    </div>

                    {/* Correct Score */}
                    <div className="p-5  border border-blue-600 rounded-lg ">
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <Trophy className="w-5 h-5 mr-2 text-gray-200" /> Correct Score
                        </h3>
                        <p className="text-blue-700 text-sm">
                            {matchOutcome.correctScore.home} - {matchOutcome.correctScore.away}
                        </p>
                    </div>

                    {/* Halftime / Fulltime */}
                    <div className="p-5  border border-yellow-600 rounded-lg ">
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <Timer className="w-5 h-5 mr-2 text-gray-200" /> Halftime / Fulltime
                        </h3>
                        <p className="text-yellow-700 text-sm">
                            HT: {matchOutcome.halftimeFulltime.halftime} / FT: {matchOutcome.halftimeFulltime.fulltime}
                        </p>
                    </div>

                    {/* First to Score */}
                    <div className="p-5  border border-orange-600 rounded-lg ">
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <Flag className="w-5 h-5 mr-2 text-gray-200" /> First to Score
                        </h3>
                        <p className="text-orange-700 text-sm">{matchOutcome.firstToScore}</p>
                    </div>

                    {/* Last to Score */}
                    <div className="p-5 border border-red-600 rounded-lg ">
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <Flag className="w-5 h-5 mr-2 text-gray-200" /> Last to Score
                        </h3>
                        <p className="text-red-700 text-sm">{matchOutcome.lastToScore}</p>
                    </div>

                    {/* Margin of Victory */}
                    <div className="p-5  border border-purple-600 rounded-lg  text-center">
                        <h3 className="text-lg font-semibold flex items-center justify-center mb-2">
                            <Divide className="w-5 h-5 mr-2 text-gray-200" /> Margin of Victory
                        </h3>
                        <p className="text-purple-700 text-sm">{matchOutcome.marginOfVictory} Goal(s)</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MatchOutcome
