import React from "react";
import { Gem, ShieldCheck, AlertTriangle, RefreshCw, Radio, BarChart, XCircle } from "lucide-react";
import { ShieldOff, CheckCircle, Repeat, Activity } from "lucide-react";
import { Trophy, TrendingUp, Home, Globe, History } from "lucide-react";
import { User, Star, Target, Medal, Shield } from "lucide-react";
import { CloudRain, Sun, Thermometer } from "lucide-react";
import moment from "moment";
import { Goal, Timer, Flag, Divide } from "lucide-react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";



const SoccerMatchPrediction = () => {
    const { fixtureId } = useParams();
    const upcomingFixturesPredictions = useSelector((state) => state.prediction.upcomingFixturesPredictions);

    // Find the prediction object matching the fixtureId
    const prediction = upcomingFixturesPredictions.find(pred => pred.fixtureId === Number(fixtureId));
    if (!prediction) return <p className="text-center text-gray-500">Not found</p>;

    const { match, predictions } = prediction;
    const { homeTeam, awayTeam } = match;
    const { matchOutcome, playerPerformance, teamPerformance, bettingOdds, gameSpecific, streakAndForm, weatherInfluence } = predictions;
    console.log("weatherInfluence.temperature", weatherInfluence.temperature);

    const { win } = matchOutcome;

    return (
        <div className=" grid grid-cols-12 gap-6 rounded-lg ">

            {/* Probability Section */}
            <div className="col-span-12 md:col-span-8 flex flex-col items-center bg-secondary text-white p-6 md:p-8 rounded-xl">
                <h2 className="text-xl  font-bold uppercase mb-4">Match RESULT Probabilities</h2>

                {/* Probabilities */}
                <div className="flex justify-between mb-2 w-full text-xs font-semibold">
                    <span className="text-gray-300 text-xs">{homeTeam.name} <span className="text-white">{win.home}%</span></span>
                    <span className="text-gray-300 text-xs">Draw <span>{win.draw}%</span></span>
                    <span className="text-gray-300 text-xs">{awayTeam.name} <span className="text-white">{win.away}%</span></span>
                </div>

                {/* Probability Bar */}
                <div className="relative w-full rounded-[2px]  gap-[2px] h-4 overflow-hidden mt-2 flex">
                    <div className="bg-red-600 h-full" style={{ width: `${win.home}%` }}></div>
                    <div className="bg-gray-400 h-full" style={{ width: `${win.draw}%` }}></div>
                    <div className="bg-blue-600 h-full" style={{ width: `${win.away}%` }}></div>
                </div>

                {/* Impact on Game */}
                <div className="mt-4 p-3 rounded-lg text-center">
                    <p className="text-base text-gray-400">Wheather conditions {weatherInfluence.impactOnGame}</p>
                </div>
            </div>

            {/* Weather Influence */}
            <div className="col-span-12 md:col-span-4 bg-secondary p-6 rounded-xl text-white">
                {/* Weather Condition */}
                <p className="text-lg font-semibold tracking-wide text-gray-200 text-center">
                    {weatherInfluence.condition}
                </p>

                {/* Weather Icon */}
                <div className="flex justify-center my-4">
                    {weatherInfluence.condition.includes("rain") ? (
                        <CloudRain size={50} className="text-gray-300" />
                    ) : (
                        <Sun size={50} className="text-yellow-400" />
                    )}
                </div>

                {/* Match Location & Date */}
                <div className="text-center border-t border-gray-500 pt-4 mt-3">
                    <p className="text-sm text-gray-300">
                        {moment(match.date).format("MMMM D, YYYY")}
                    </p>
                </div>

                {/* Temperature & Controls */}
                <div className="flex justify-between items-center mt-4">
                    <Thermometer size={20} className="text-gray-300" />
                    <p className="text-2xl font-bold">{weatherInfluence.temperature}°C</p>
                </div>

                {/* Impact on Game */}
                {/* <div className="mt-4  p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-300 font-medium">Impact on Game:</p>
                    <p className="text-lg font-bold text-gray-100">{weatherInfluence.impactOnGame}</p>
                </div> */}
            </div>

            {/* Additional Predictions */}
            <div className="col-span-12 bg-secondary p-6 md:p-8 rounded-xl ">
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

            {/* Player Performance Section */}
            <div className="col-span-12 bg-secondary p-6 md:p-8 rounded-xl ">
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

            {/* Team Performance Section */}
            <div className="col-span-12 bg-secondary p-6 md:p-8 rounded-xl text-white">
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


            {/* Betting Odds Section */}
            <div className="col-span-12 bg-secondary p-6 md:p-8 rounded-xl ">
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


            {/* Game-Specific Insights */}
            <div className="col-span-12 lg:col-span-6 bg-secondary p-6 md:p-8 rounded-xl ">
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

            {/* Streak & Form */}
            <div className="col-span-12 lg:col-span-6 bg-secondary p-6 md:p-8 rounded-xl">
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

        </div>
    );
};

export default SoccerMatchPrediction;
