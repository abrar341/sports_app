import React, { useEffect } from "react";
import { AF_Data } from "../AI_data";
import Probability from "./Probability";
import Weather from "./Weather";
import MatchOutcome from "./MatchOutcome";
import BettingOdds from "./BettingOdds";
import GameSpecific from "./GameSpecific";
import StreakForm from "./StreakForm";
import { AFTeamPerformance } from "./AFTeamPerformance";
import AFPlayerPerformance from "./AFPlayerPerformance";
import { useSelector, useDispatch } from "react-redux";
import { EmptyState } from "../../Shared/EmptyState";
import { FaRegSadTear } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { fetchAFPredictionByGameId } from "../../../slices/predictionSlice";

const AFMatchPrediction = () => {
  const { fixtureId } = useParams();
  const dispatch = useDispatch();
  const {
    AFupcomingFixturesPredictions,
    predictionLoading,
    gameIdPredictionLoading,
  } = useSelector((state) => state.prediction);

  // Find the prediction object matching the fixtureId
  const prediction = AFupcomingFixturesPredictions.find(
    (pred) => pred.gameId === Number(fixtureId)
  );

  // Track if we're currently fetching this specific game's prediction
  const isCurrentGameLoading = gameIdPredictionLoading && !prediction;

  // Fetch prediction if not found and not already loading
  useEffect(() => {
    if (
      !prediction &&
      !gameIdPredictionLoading &&
      !predictionLoading &&
      fixtureId
    ) {
      dispatch(fetchAFPredictionByGameId(Number(fixtureId)));
    }
  }, [
    dispatch,
    prediction,
    gameIdPredictionLoading,
    predictionLoading,
    fixtureId,
  ]);

  // Show loading state ONLY when fetching THIS specific game's prediction and it's not already cached
  if (isCurrentGameLoading) {
    return (
      <div className="flex bg-secondary rounded-xl w-full h-full justify-center items-center py-12">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-primarySolid border-t-secondary rounded-full animate-spin"></div>
          <div className="text-center">
            <div className="text-lg font-medium text-gray-200 mb-1">
              Fetching Predictions...
            </div>
            <div className="text-sm text-gray-200">this can take a while.</div>
          </div>
        </div>
      </div>
    );
  }

  // Show empty state if no prediction found and not loading
  if (!prediction && !predictionLoading && !gameIdPredictionLoading) {
    return (
      <EmptyState
        icon={FaRegSadTear}
        message="No Predictions yet for this match."
      />
    );
  }

  // Show loading for general prediction loading
  if (!prediction && predictionLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse text-lg font-medium text-gray-600">
          Loading predictions...
        </div>
      </div>
    );
  }

  // If we still don't have prediction data, show empty state
  if (!prediction) {
    return (
      <EmptyState
        icon={FaRegSadTear}
        message="No Predictions yet for this match."
      />
    );
  }

  const { match, predictions } = prediction;
  const { homeTeam, awayTeam } = match;
  const {
    matchOutcome,
    playerPerformance,
    teamPerformance,
    bettingOdds,
    gameSpecific,
    streakAndForm,
    weatherInfluence,
  } = predictions;

  const { win } = matchOutcome;

  return (
    <div className="grid grid-cols-12 gap-6 rounded-lg">
      {/* Probability Section */}
      <div className="col-span-12 md:col-span-8">
        <Probability
          match={match}
          win={win}
          weatherInfluence={weatherInfluence}
        />
      </div>

      {/* Weather Influence */}
      <div className="col-span-12 md:col-span-4">
        <Weather match={match} weatherInfluence={weatherInfluence} />
      </div>

      {/* Additional Predictions */}
      <div className="col-span-12">
        <MatchOutcome matchOutcome={matchOutcome} />
      </div>

      {/* Player Performance Section */}
      <div className="col-span-12">
        <AFPlayerPerformance playerPerformance={playerPerformance} />
      </div>

      {/* Team Performance Section */}
      <div className="col-span-12">
        <AFTeamPerformance afTeamPerformance={teamPerformance} />
      </div>

      {/* Betting Odds Section */}
      <div className="col-span-12">
        <BettingOdds bettingOdds={bettingOdds} />
      </div>

      {/* Game-Specific Insights */}
      <div className="col-span-12 lg:col-span-6">
        <GameSpecific gameSpecific={gameSpecific} />
      </div>

      {/* Streak & Form */}
      <div className="col-span-12 lg:col-span-6">
        <StreakForm streakAndForm={streakAndForm} />
      </div>
    </div>
  );
};

export default AFMatchPrediction;
