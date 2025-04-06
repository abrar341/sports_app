import { Activity, CheckCircle, Repeat, ShieldOff } from 'lucide-react'
import React from 'react'

const GameSpecific = ({ gameSpecific }) => {
    return (
        <div className='bg-secondary p-6 md:p-8 rounded-xl '>
            <h2 className="text-xl font-bold mb-6 text-center text-gray-100 uppercase tracking-wide">
                Game-Specific Insights
            </h2>

            <div >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-gray-200 font-medium">

                    {/* Penalty Awarded */}
                    <div className={`p-5 rounded-lg  ${gameSpecific.penaltyAwarded ? " border border-green-600" : "border border-gray-400"}`}>
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <ShieldOff className="w-5 h-5 mr-2 text-gray-200" /> Penalty Awarded
                        </h3>
                        <p className={`text-sm ${gameSpecific.penaltyAwarded ? "text-green-600" : "text-gray-500"}`}>
                            {gameSpecific.penaltyAwarded ? "Yes, a penalty was awarded." : "No penalty awarded."}
                        </p>
                    </div>

                    {/* Penalty Converted */}
                    <div className={`p-5 rounded-lg  ${gameSpecific.penaltyConverted ? " border border-green-600" : " border border-red-600"}`}>
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <CheckCircle className="w-5 h-5 mr-2 text-gray-200" /> Penalty Converted
                        </h3>
                        <p className={`text-sm ${gameSpecific.penaltyConverted ? "text-green-600" : "text-red-600"}`}>
                            {gameSpecific.penaltyConverted ? "Yes, the penalty was converted." : "Missed or not taken."}
                        </p>
                    </div>

                    {/* Substitution Impact */}
                    <div className="p-5 border border-blue-600 rounded-lg ">
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <Repeat className="w-5 h-5 mr-2 text-gray-200" /> Substitution Impact
                        </h3>
                        <p className="text-blue-600 text-sm">{gameSpecific.substitutionImpact} impact on the game.</p>
                    </div>

                    {/* Injury Time Goals Probability */}
                    <div className="p-5 border border-yellow-600 rounded-lg ">
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                            <Activity className="w-5 h-5 mr-2 text-gray-200" /> Injury Time Goal Probability
                        </h3>
                        <p className="text-yellow-600 text-sm">{gameSpecific.injuryTimeGoalsProbability}% chance of a goal in injury time.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GameSpecific
