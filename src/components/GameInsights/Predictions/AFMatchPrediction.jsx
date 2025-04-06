import React from 'react'
import { AF_Data } from '../AI_data';
import Probability from './Probability';
import Weather from './Weather';
import MatchOutcome from './MatchOutcome';
import BettingOdds from './BettingOdds';
import GameSpecific from './GameSpecific';
import StreakForm from './StreakForm';
import { AFTeamPerformance } from './AFTeamPerformance';
import AFPlayerPerformance from './AFPlayerPerformance';
import { useSelector } from 'react-redux';
import { EmptyState } from '../../Shared/EmptyState';
import { FaRegSadTear } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const AFMatchPrediction = () => {
    const { fixtureId } = useParams();
    const { AFupcomingFixturesPredictions, predictionLoading } = useSelector((state) => state.prediction);

    // Find the prediction object matching the fixtureId
    const prediction = AFupcomingFixturesPredictions.find(pred => pred.gameId === Number(fixtureId));
    if (!prediction && !predictionLoading) return <EmptyState icon={FaRegSadTear} message="No Predictions yet for this match." />;
    const { match, predictions } = prediction;

    const { homeTeam, awayTeam } = match;
    const { matchOutcome, playerPerformance, teamPerformance, bettingOdds, gameSpecific, streakAndForm, weatherInfluence } = predictions;

    const { win } = matchOutcome;
    return (
        <div className=" grid grid-cols-12 gap-6 rounded-lg ">
            {/* Probability Section */}
            <div className="col-span-12 md:col-span-8 ">
                <Probability match={match} win={win} weatherInfluence={weatherInfluence} />
            </div>

            {/* Weather Influence */}
            <div className="col-span-12 md:col-span-4 ">
                <Weather match={match} weatherInfluence={weatherInfluence} />
            </div>

            {/* Additional Predictions */}
            <div className="col-span-12  ">
                <MatchOutcome matchOutcome={matchOutcome} />
            </div>

            {/* Player Performance Section */}
            <div className="col-span-12  ">
                <AFPlayerPerformance playerPerformance={playerPerformance} />
            </div>

            {/* Team Performance Section */}
            <div className="col-span-12 ">
                <AFTeamPerformance afTeamPerformance={teamPerformance} />
            </div>


            {/* Betting Odds Section */}
            <div className="col-span-12 ">
                <BettingOdds bettingOdds={bettingOdds} />
            </div>

            {/* Game-Specific Insights */}
            <div className="col-span-12 lg:col-span-6 ">
                <GameSpecific gameSpecific={gameSpecific} />
            </div>

            {/* Streak & Form */}
            <div className="col-span-12 lg:col-span-6 ">
                <StreakForm streakAndForm={streakAndForm} />
            </div>
        </div>
    )
}

export default AFMatchPrediction
