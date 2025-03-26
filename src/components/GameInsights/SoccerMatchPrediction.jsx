import React from "react";
import { data } from "./AI_data";

const SoccerMatchPrediction = ({ data }) => {
    if (!data) return <p className="text-center text-gray-500">Loading predictions...</p>;

    const { match, predictions } = data;
    const { homeTeam, awayTeam, date, league } = match;
    const { matchOutcome, playerPerformance, teamPerformance, bettingOdds, weatherInfluence } = predictions;

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">{league.name} - Match Prediction</h2>
            <div className="flex justify-between items-center mb-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 w-1/3">{homeTeam.name}</h3>
                <span className="text-lg font-bold text-gray-600">VS</span>
                <h3 className="text-xl font-semibold text-gray-800 w-1/3">{awayTeam.name}</h3>
            </div>
            <p className="text-center text-gray-600 mb-6">📅 Match Date: {new Date(date.$date).toLocaleString()}</p>

            {/* Match Outcome Probabilities */}
            <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">Match Outcome Probabilities</h4>
                <p className="mb-1">🏆 {homeTeam.name} Win: <span className="font-bold">{matchOutcome.win.home}%</span></p>
                <p className="mb-1">⚔️ Draw: <span className="font-bold">{matchOutcome.win.draw}%</span></p>
                <p className="mb-1">🔴 {awayTeam.name} Win: <span className="font-bold">{matchOutcome.win.away}%</span></p>
            </div>

            {/* Correct Score Prediction */}
            <div className="mb-6 p-4 bg-gray-100 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-gray-800">Predicted Score</h4>
                <p className="text-2xl font-bold mt-2 text-gray-900">{homeTeam.name} {matchOutcome.correctScore.home} - {matchOutcome.correctScore.away} {awayTeam.name}</p>
            </div>

            {/* Player Performances */}
            <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">Key Player Performances</h4>
                {playerPerformance.map(player => (
                    <div key={player.player.id} className="border-b py-3 last:border-none text-gray-700">
                        <p className="font-medium">⚽ {player.player.name} ({player.player.team})</p>
                        <p>🎯 Shots on Target: <span className="font-bold">{player.shots.onTarget} / {player.shots.total}</span></p>
                        <p>🅰️ Assists: <span className="font-bold">{player.assists}</span></p>
                        <p>🏆 Man of the Match: <span className="font-bold">{player.manOfTheMatch ? "Yes" : "No"}</span></p>
                    </div>
                ))}
            </div>

            {/* Weather Conditions */}
            <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">Weather Conditions</h4>
                <p>🌡️ Temperature: <span className="font-bold">{weatherInfluence.temperature}°C</span></p>
                <p>🌧️ Condition: <span className="font-bold">{weatherInfluence.condition}</span></p>
                <p>⚽ Impact on Game: <span className="font-bold">{weatherInfluence.impactOnGame}</span></p>
            </div>
        </div>
    );
};

export default SoccerMatchPrediction;
