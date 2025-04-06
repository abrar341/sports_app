import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../Shared/Loading";
import { EmptyState } from "../../Shared/EmptyState";
import { FaRegSadTear } from "react-icons/fa";
import Probability from "./Probability";
import Weather from "./Weather";
import MatchOutcome from "./MatchOutcome";
import PlayerPerformance from "./PlayerPerformance";
import TeamPerformance from "./TeamPerformance";
import BettingOdds from "./BettingOdds";
import GameSpecific from "./GameSpecific";
import StreakForm from "./StreakForm";

const SoccerMatchPrediction = () => {
    const { fixtureId } = useParams();
    const { upcomingFixturesPredictions, predictionLoading } = useSelector((state) => state.prediction);

    // Find the prediction object matching the fixtureId
    const prediction = upcomingFixturesPredictions.find(pred => pred.fixtureId === Number(fixtureId));
    if (!prediction && !predictionLoading) return <EmptyState icon={FaRegSadTear} message="No Predictions yet for this match." />;

    const { match, predictions } = prediction;
    const { homeTeam, awayTeam } = match;
    const { matchOutcome, playerPerformance, teamPerformance, bettingOdds, gameSpecific, streakAndForm, weatherInfluence } = predictions;

    const { win } = matchOutcome;

    return predictionLoading ? <Loading /> : (
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
                <PlayerPerformance playerPerformance={playerPerformance} />
            </div>

            {/* Team Performance Section */}
            <div className="col-span-12 ">
                <TeamPerformance teamPerformance={teamPerformance} />
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
    );
};

export default SoccerMatchPrediction;
