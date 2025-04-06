import { Globe, Home, TrendingUp, Trophy, History } from 'lucide-react'
import React from 'react'

const StreakForm = ({ streakAndForm }) => {
    return (
        <div className='bg-secondary p-6 md:p-8 rounded-xl'>
            <h2 className="text-xl font-bold mb-6 text-center text-gray-100 uppercase tracking-wide">
                Streak & Form
            </h2>

            <div className=" ">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6 text-base text-gray-100 font-medium">

                    {/* Team Winning Streak - Home */}
                    <div className="p-5 border border-green-600 rounded-lg ">
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <Trophy className="w-5 h-5 mr-2 text-gray-200" /> Home Winning Streak
                        </h3>
                        <p className="text-green-700 text-sm">{streakAndForm.teamWinningStreak.home} consecutive wins at home.</p>
                    </div>

                    {/* Team Winning Streak - Away */}
                    <div className={`p-5 rounded-lg  ${streakAndForm.teamWinningStreak.away > 0 ? " border border-green-600" : " border border-red-600"}`}>
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <Globe className="w-5 h-5 mr-2 text-gray-200" /> Away Winning Streak
                        </h3>
                        <p className={`text-sm ${streakAndForm.teamWinningStreak.away > 0 ? "text-green-700" : "text-red-700"}`}>
                            {streakAndForm.teamWinningStreak.away > 0 ? `${streakAndForm.teamWinningStreak.away} wins away.` : "No away wins recently."}
                        </p>
                    </div>

                    {/* Head-to-Head Comparison */}
                    <div className="p-5 border border-blue-600 rounded-lg ">
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <History className="w-5 h-5 mr-2 text-gray-200" /> Head-to-Head Record
                        </h3>
                        <p className="text-blue-700 text-sm">{streakAndForm.headToHeadComparison}</p>
                    </div>

                    {/* Home Performance */}
                    <div className="p-5  border border-yellow-600 rounded-lg ">
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <Home className="w-5 h-5 mr-2 text-gray-200" /> Home Performance
                        </h3>
                        <p className="text-yellow-700 text-sm">{streakAndForm.homeAwayPerformance.home} at home.</p>
                    </div>

                    {/* Away Performance */}
                    <div className={`p-5 rounded-lg  ${streakAndForm.homeAwayPerformance.away === "Strong" ? " border border-green-600" : " border border-red-600"}`}>
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <TrendingUp className="w-5 h-5 mr-2 text-gray-200" /> Away Performance
                        </h3>
                        <p className={`text-sm ${streakAndForm.homeAwayPerformance.away === "Strong" ? "text-green-700" : "text-red-700"}`}>
                            {streakAndForm.homeAwayPerformance.away} performance in away games.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StreakForm
