import PlayerCard from "../Shared/PlayerCard";
import { PlayerCardData, pieChartData } from "./PlayerData"; // Import data
import AlertCard from "./AlertCard";
import PlayerInsightSearchBar from "../Shared/PlayerInsightSearchBar";
import PlayersAreaChart from "../Shared/PlayersAreaChart";
import PlayersComparison from "./PlayersComparison";
import PlayersPieChart from "../Shared/PlayersPieChart";
import PlayerTable from "./PlayerTable";
import { AreaChartData } from "./PlayerData";
import { useEffect, useState } from "react";
import { getPlayerAggregatedStats, getPlayerProfile, searchPlayer } from "../../Api/Player/SearchPlayer";
import PlayerStatistics from "./PlayerStats";
import { useDispatch, useSelector } from "react-redux";
import useFetchFavouritePlayers from "../../hooks/useFetchFavouritePlayers";
import { fetchPlayerData } from "../../slices/selectionSlice";
import usePlayerActions from "../../hooks/usePlayerActions";
import { FaSearch } from "react-icons/fa";
import Loading from "../Shared/Loading";
import { setPlayerStatsLoading } from "../../slices";


const PlayersInsights = () => {

    const { selectedPlayer, selectedPlayerStats } = useSelector((state) => state.selection);
    const { playerProfileLoading, playerStatsLoading } = useSelector((state) => state.loading);


    const dispatch = useDispatch();
    const [profileLoading, setProfileLoading] = useState(false);

    useFetchFavouritePlayers();
    const { handleSearch, handleSelectPlayer } = usePlayerActions();


    return (
        <div className="text-white min-h-screen overflow-clip p-8">
            {/* Grid Section */}
            <div className=" grid  grid-cols-12 gap-6">
                {/* Player Insight Search Bar */}
                <div className="col-span-12 ">
                    {/* <PlayerInsightSearchBar /> */}
                    <PlayerInsightSearchBar onSearch={handleSearch} onSelect={handleSelectPlayer} />
                </div>


                {
                    !selectedPlayer && playerProfileLoading && <div className={`col-span-12`}><Loading /></div>
                }
                {
                    !selectedPlayer && !playerProfileLoading && <div className={`col-span-12`}>

                        <div className="flex flex-col rounded-xl  items-center justify-center p-6 text-gray-400">
                            <FaSearch className="w-10 h-10 mb-2" />
                            <p >Search for a player and select it.</p>
                        </div>
                    </div>
                }

                {/* Single Player Card */}
                {
                    selectedPlayer &&
                    <>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <PlayerCard
                                playerStats={selectedPlayerStats}
                                playerId={selectedPlayer?.playerId}
                                playerRef={selectedPlayer?._id}
                                profileLoading={profileLoading}
                                name={selectedPlayer?.name || "No Name"}
                                age={selectedPlayer?.birth.date || "00"}
                                nationality={selectedPlayer?.nationality || "Spain"}
                                position={selectedPlayer?.position || "Forward"}
                                totalGoals={PlayerCardData.totalGoals}
                                assists={PlayerCardData.assists}
                                points={PlayerCardData.points}
                                image={selectedPlayer?.photo || "https://media.api-sports.io/football/players/198360.png"}
                            />
                        </div>

                        {/* Alerts Section */}
                        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
                            <AlertCard />
                        </div>
                        {
                            selectedPlayerStats?.length > 0 ?
                                <>
                                    {!playerProfileLoading && <h2 className="text-2xl py-2 px-1 col-span-12 font-bold  text-white">
                                        Player Statistics
                                    </h2>}
                                    <div className="col-span-12">
                                        <PlayerStatistics data={selectedPlayerStats} />
                                    </div>

                                    {/* Performance Updates */}
                                    <div className="col-span-12 ">
                                        <PlayersAreaChart data={selectedPlayerStats} />
                                    </div>

                                    <div className="col-span-12">
                                        <PlayersComparison />
                                    </div>

                                    {/* Table Section */}
                                    <div className="col-span-12 xl:col-span-8">
                                        <PlayerTable />
                                    </div>

                                    {/* Pie Chart Section */}
                                    <div className="col-span-12 xl:col-span-4">
                                        <PlayersPieChart stats={selectedPlayerStats} /> {/* Pass pieChartData as prop */}
                                    </div>
                                </> :
                                <div className="col-span-12 text-center bg-secondary py-4 rounded-xl">
                                    Stats not available for this player
                                </div>
                        }
                    </>}
            </div>
        </div>
    );
};

export default PlayersInsights;
