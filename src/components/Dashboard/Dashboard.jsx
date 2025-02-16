
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
import { useEffect } from "react";
import { getFavouriteHighlights } from "../../Api/Favorite/Favorite";
import { setFavoritePlayersHighlightsLoading, setFavoriteTeamsHighlightsLoading } from "../../slices";
import { setFavoritePlayersHighlights, setFavoriteTeamHighlights } from "../../slices/favoritesSlice";
import { useDispatch } from "react-redux";

const Dashboard = () => {
    const sportName = "soccer";
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchHighlights = async () => {
            if (!sportName) return; // Don't fetch if sportName is empty

            dispatch(setFavoritePlayersHighlightsLoading(true));
            dispatch(setFavoriteTeamsHighlightsLoading(true));

            try {
                const res = await getFavouriteHighlights(sportName);
                dispatch(setFavoritePlayersHighlights(res?.data.players));
                dispatch(setFavoriteTeamHighlights(res?.data.teams));
            } catch (err) {
                // dispatch(setError(err.message));
                console.log("Error Occured")
            } finally {
                dispatch(setFavoritePlayersHighlightsLoading(false));
                dispatch(setFavoriteTeamsHighlightsLoading(false));
            }
        };

        fetchHighlights();
    }, [sportName, dispatch]);

    return (
        <>
            <main className="flex overflow-hidden min-h-screen bg-primary  p-8 flex-col">
                <SearchBar />
                <div className="self-center">
                    <div className="">
                        <div className="">
                            <section className="mt-6 w-full">
                                <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
                                    <div className="md:col-span-2">
                                        <PlayersAreaChart data={AreaChartData} />
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