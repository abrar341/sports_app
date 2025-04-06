import { AlertTriangle, Gem, Radio, RefreshCw, ShieldCheck } from 'lucide-react'
import React from 'react'

const BettingOdds = ({ bettingOdds }) => {
    return (
        <div className='bg-secondary p-6 md:p-8 rounded-xl '>
            <h2 className="text-xl font-bold mb-6 text-center text-gray-100 uppercase tracking-wide">
                Betting Odds & Insights
            </h2>

            <div className=" rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-base text-gray-800 font-medium">

                    {/* Best Value Bets */}
                    <div className="p-5 border border-blue-600  rounded-lg ">
                        <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
                            <Gem className="w-5 h-5 mr-2" /> Best Value Bets
                        </h3>
                        <ul className="list-disc list-inside text-gray-300">
                            {bettingOdds.bestValueBets.length > 0 ? (
                                bettingOdds.bestValueBets.map((bet, index) => (
                                    <li key={index}>{bet}</li>
                                ))
                            ) : (
                                <p className="text-gray-500">No best value bets available.</p>
                            )}
                        </ul>
                    </div>

                    {/* Safe Bets */}
                    <div className="p-5 border border-green-600 rounded-lg ">
                        <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center">
                            <ShieldCheck className="w-5 h-5 mr-2" /> Safe Bets
                        </h3>
                        <ul className="list-disc list-inside text-gray-300">
                            {bettingOdds.safeBets.length > 0 ? (
                                bettingOdds.safeBets.map((bet, index) => (
                                    <li key={index}>{bet}</li>
                                ))
                            ) : (
                                <p className="text-gray-500">No safe bets available.</p>
                            )}
                        </ul>
                    </div>

                    {/* High-Risk Bets */}
                    <div className="p-5 border border-red-600  rounded-lg ">
                        <h3 className="text-lg font-semibold text-red-300 mb-3 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" /> High-Risk Bets
                        </h3>
                        <ul className="list-disc list-inside text-gray-300">
                            {bettingOdds.highRiskBets.length > 0 ? (
                                bettingOdds.highRiskBets.map((bet, index) => (
                                    <li key={index}>{bet}</li>
                                ))
                            ) : (
                                <p className="text-gray-500">No high-risk bets available.</p>
                            )}
                        </ul>
                    </div>

                    {/* Arbitrage Opportunities */}
                    <div className="p-5 border border-yellow-600  rounded-lg ">
                        <h3 className="text-lg font-semibold text-yellow-300 mb-3 flex items-center">
                            <RefreshCw className="w-5 h-5 mr-2" /> Arbitrage Opportunities
                        </h3>
                        <ul className="list-disc list-inside text-gray-300">
                            {bettingOdds.arbitrageOpportunities.length > 0 ? (
                                bettingOdds.arbitrageOpportunities.map((bet, index) => (
                                    <li key={index}>{bet}</li>
                                ))
                            ) : (
                                <p className="text-gray-300">No arbitrage opportunities available.</p>
                            )}
                        </ul>
                    </div>

                    {/* Live Betting Suggestions */}
                    <div className="p-5 border border-purple-600  rounded-lg ">
                        <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center">
                            <Radio className="w-5 h-5 mr-2" /> Live Betting Suggestions
                        </h3>
                        <ul className="list-disc list-inside text-gray-300">
                            {bettingOdds.liveBettingSuggestions.length > 0 ? (
                                bettingOdds.liveBettingSuggestions.map((bet, index) => (
                                    <li key={index}>{bet}</li>
                                ))
                            ) : (
                                <p className="text-gray-500">No live betting suggestions available.</p>
                            )}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BettingOdds
