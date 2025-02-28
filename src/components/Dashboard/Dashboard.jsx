
import AlertsWidget from "./AlertsWidget";
import PlayerStatsWidget from "./PlayerStatsWidget";
import TeamStatsWidget from "./TeamStatsWidget";
import LeagueStatsWidget from "./LeagueStatsWidget";
import TonightsHighlightWidget from "./TonightsHighlightsWidgets";
import PlayerPredictionWidget from "./PlayerPredictionWidget";
import TrendingInsightCard from "./TrendingInsightCard";
import BetPredictionWidget from "./BetPredictionWidget;";
import PlayersAreaChart from "../Shared/PlayersAreaChart";
import { AreaChartData } from "../PlayersInsights/PlayerData";
import AlertCard from "../PlayersInsights/AlertCard";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { getFavouriteHighlights } from "../../Api/Favorite/Favorite";
import { setFavoritePlayersHighlightsLoading, setFavoriteTeamsHighlightsLoading } from "../../slices";
import { resetHighlights, setFavoriteLeaguesHighlights, setFavoritePlayersHighlights, setFavoriteTeamsHighlights } from "../../slices/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import PlayerInsightSearchBar from "../Shared/PlayerInsightSearchBar";
import usePlayerActions from "../../hooks/usePlayerActions";
import useTeamActions from "../../hooks/useTeamActions";
import TeamInsightSearchBar from "../Shared/TeamInsightSearchBar";
import { setPlayerOrTeam, setSportsNameDashboard } from "../../slices/selectionSlice";
import LeagueAreaChart from "../Shared/LeagueAreaChart";

import { io } from "socket.io-client";
import { initializeScoreUpdates, setLiveFixtures, setUpcomingFixtures, setUpcomingFixturesOdds } from "../../slices/fixturesSlice";

const socket = io("http://localhost:3000"); // Change to your backend URL

const Dashboard = () => {

    const { favoriteLeaguessHighlights } = useSelector((state) => state.favorites); // Get loading states
    const { playerOrTeam, sportsNameDashboard } = useSelector((state) => state.selection); // Access Redux state
    const [sportsName, setSportsName] = useState("soccer");

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchHighlights = async () => {
            if (!sportsNameDashboard || favoriteLeaguessHighlights.length > 0) return; // Prevent fetching if data exists

            dispatch(setFavoritePlayersHighlightsLoading(true));
            dispatch(setFavoriteTeamsHighlightsLoading(true));

            try {
                const res = await getFavouriteHighlights(sportsNameDashboard);
                dispatch(setFavoritePlayersHighlights(res?.data.players));
                dispatch(setFavoriteTeamsHighlights(res?.data.teams));
                dispatch(setFavoriteLeaguesHighlights(res?.data.leagues));

            } catch (err) {
                console.log("Error Occurred", err);
            } finally {
                dispatch(setFavoritePlayersHighlightsLoading(false));
                dispatch(setFavoriteTeamsHighlightsLoading(false));
            }
        };
        fetchHighlights();
    }, [sportsNameDashboard, dispatch]); // Re-run only if sportsNameDashboard changes OR leagues data is empty

    const { handleSearch, handleSelectPlayer } = usePlayerActions();
    const { handleSelectTeam, SearchTeam } = useTeamActions();

    useEffect(() => {
        dispatch(initializeScoreUpdates())
    }, [dispatch]);

    return (
        <>
            <main className="flex overflow-hidden min-h-screen bg-primary  p-8 flex-col">
                {/* <SearchBar /> */}
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {/* Conditional Rendering */}
                    {playerOrTeam === "player" ? (
                        <>
                            <div className="col-span-12 w-full  flex  ">
                                {/* <PlayerInsightSearchBar /> */}
                                <PlayerInsightSearchBar sportsName={sportsName} onSearch={handleSearch} onSelect={handleSelectPlayer} />
                                <div className="">
                                    <select
                                        value={sportsName}
                                        onChange={(e) => setSportsName(e.target.value)}
                                        className="bg-primarySolid w-full h-full text-white px-4 py-2 md:py-3 rounded-r-full focus:outline-none h-full shadow-[0px_1px_55px_0px_rgba(84,84,84,0.06)]"
                                    >
                                        <option value="soccer">Soccer</option>
                                        <option value="american-football">American Football</option>
                                    </select>
                                </div>
                            </div>
                        </>) : (
                        <div className={`col-span-12 w-full  flex `}>
                            <TeamInsightSearchBar onSearch={SearchTeam} sportsName={sportsName} onSelect={handleSelectTeam} />
                            <div className="h-full ">
                                <select
                                    value={sportsName}
                                    onChange={(e) => setSportsName(e.target.value)}
                                    className="bg-primarySolid w-full h-full text-white px-4 py-3 rounded-r-full focus:outline-none shadow-[0px_1px_55px_0px_rgba(84,84,84,0.06)]"
                                >
                                    <option value="soccer">Soccer</option>
                                    <option value="american-football">American Football</option>
                                </select>
                            </div>
                        </div>
                    )}

                    <div className="flex w-full col-span-12  gap-2">

                        {/* Player/Team Dropdown */}
                        <select
                            value={playerOrTeam}
                            onChange={(e) => dispatch(setPlayerOrTeam(e.target.value))}
                            className="bg-primarySolid w-full text-white px-4 py-2 rounded-full focus:outline-none shadow-[0px_1px_55px_0px_rgba(84,84,84,0.06)]"
                        >
                            <option value="player">Player</option>
                            <option value="team">Team</option>
                        </select>

                        {/* Sport Dropdown */}
                        <select
                            value={sportsNameDashboard}
                            onChange={(e) => {
                                dispatch(setSportsNameDashboard(e.target.value))
                                dispatch(resetHighlights())

                            }}
                            className="bg-primarySolid w-full text-white px-4 py-2 rounded-full focus:outline-none shadow-[0px_1px_55px_0px_rgba(84,84,84,0.06)]"
                        >
                            <option value="soccer">Soccer</option>
                            <option value="basketball">Basketball</option>
                            <option value="american-football">American football</option>
                        </select>

                        {/* Advanced Search Button */}
                        <button className="bg-primarySolid w-full overflow-auto  px-2 lg:px-4 py-2   rounded-full text-white">
                            Advanced
                        </button>
                    </div>
                </div>
                <div className="self-center">
                    <div className="">
                        <div className="">
                            <section className="mt-6 w-full">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="md:col-span-2 ">
                                        <LeagueAreaChart data={favoriteLeaguessHighlights} />
                                    </div>
                                    <AlertCard />
                                </div>

                                <section className="mt-6 w-full max-md:max-w-full">
                                    <h2 className="text-3xl font-bold leading-none text-white max-md:max-w-full">
                                        Favourites Highlights
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  items-start gap-6  mt-6 w-full ">
                                        <PlayerStatsWidget />
                                        <TeamStatsWidget />
                                        <LeagueStatsWidget />
                                    </div>
                                </section>
                            </section>
                        </div>

                        <section className="mt-6 w-full max-md:max-w-full">
                            <h2 className="text-3xl font-bold leading-none text-white max-md:max-w-full">
                                Today's Recommendations:
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 mt-6 w-full max-md:max-w-full">
                                <TonightsHighlightWidget />
                                <PlayerPredictionWidget />
                                <BetPredictionWidget />
                            </div>
                        </section>
                    </div>

                    <section className="mt-6 w-full max-md:max-w-full">
                        <h2 className="text-3xl font-bold leading-none text-white max-md:max-w-full">
                            Trending Insights:
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 mt-6 max-md:max-w-full">
                            <TrendingInsightCard
                                title="Sharp money favors Team Y in tonight's game."
                                description="Large bets on Team Y in betting markets."
                                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6bcceb3b82613ef00ef3e333011a179574b4566dfba65fcec061bcf8f4d130?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                            />
                            <TrendingInsightCard
                                title="Odds for Team Z dropped from 3.5 to 2.8."
                                description="Team Z's chances are improving."
                                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5ade162c8c28c91216938f5644ed21c7f762058eb20ae12a102ed79bd1abf5f2?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                            />
                            <TrendingInsightCard
                                title="Player X's form dipped in the last 3 matches"
                                description="Scored 1 goal in the last 5 games"
                                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/278a81500da920107d8996957c4e7a38761c3258d25882979167edb045671b9f?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                            />
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Dashboard;