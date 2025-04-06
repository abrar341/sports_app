import BarcelonaPlayersHeader from "./BarcelonaPlayersHeader";
import PlayerCardsList from "../Shared/PlayerCardsList";
import RosterAreaChart from "../Shared/RosterAreaChart";
import PlayerTable from "./PlayerTable";
import { TeamInsightTableData } from "./TeamInsightData";
import EarningBarChart from "../Shared/EarningBarChart";
import { getTeamProfile, searchTeam } from "../../Api/Team/SearchTeam";
import TeamCard from "../Shared/TeamCard";
import TeamStatistics from "./TeamStats";
import TeamsPieChart from "../Shared/TeamsPieChart";
import TeamAreaChart from "../Shared/TeamAreaChart";
import { useDispatch, useSelector } from "react-redux";
import { setTeamProfileLoading, setSelectedTeam, setSelectedTeamStats, setTeamStatsLoading } from "../../slices";
import useFetchFavouritePlayers from "../../hooks/useFetchFavouritePlayers";
import useTeamActions from "../../hooks/useTeamActions";
import Loading from "../Shared/Loading";
import { FaChevronDown, FaRegSadTear, FaSearch, FaSlidersH } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { normalizeSelectedTeamData } from "../../utils/normalizeData";
import TeamInsightSearchBar from "../Shared/TeamInsightSearchBar"
import { getFavourites } from "../../Api/Player/SearchPlayer";
import { setFavoriteTeamsOfSelectedTeamSport } from "../../slices/favoritesSlice";

const TeamInsight = () => {
    const { selectedTeam, selectedTeamStats } = useSelector((state) => state.selection);
    const { favoriteTeamsOfSelectedTeamSport } = useSelector((state) => state.favorites);
    const { handleSelectTeam, SearchTeam } = useTeamActions();

    const dispatch = useDispatch()
    const [sportsName, setSportsName] = useState("soccer");
    const { teamProfileLoading } = useSelector((state) => state.loading); // Get loading states
    const { selectedTeamSports } = useSelector((state) => state.selection);

    //normalize team data

    const [favoritesLoading, setFavoritesLoading] = useState(false);


    const fetchFavouriteTeams = useCallback(async () => {
        setFavoritesLoading(true);
        try {
            if (!selectedTeamSports) return;
            const response = await getFavourites(selectedTeamSports);
            const favourites = response?.data?.favourites?.[0];
            if (favourites) {
                dispatch(setFavoriteTeamsOfSelectedTeamSport(favourites.teams || []));
            }
        } catch (error) {
            console.error("Error fetching favourite players:", error);
        }
        setFavoritesLoading(false);
    }, [dispatch, selectedTeamSports]);

    useEffect(() => {

        if (favoriteTeamsOfSelectedTeamSport.length === 0) {
            fetchFavouriteTeams();
        }
        // fetchFavouriteTeams();
    }, [fetchFavouriteTeams, selectedTeamSports]);

    return (
        <div className="text-white min-h-screen overflow-clip px-5 py-8 sm:px-8 sm:py-8">
            <div className=" grid  grid-cols-12 gap-3 md:gap-6">

                {/* Player Insight Search Bar */}
                <div className={`col-span-11 flex`}>
                    <TeamInsightSearchBar
                        sportsName={sportsName}
                        onSearch={SearchTeam}
                        onSelect={handleSelectTeam} />
                    <div className="relative w-1/6 ">
                        <select
                            value={sportsName}
                            onChange={(e) => setSportsName(e.target.value)}
                            className="bg-[rgba(255,255,255,0.32)] h-full w-full text-white px-4 py-2 md:py-3 
                                                           rounded-r-full focus:outline-none appearance-none pr-10 text-end"
                        >
                            <option className="bg-gray-200 text-black" value="soccer">Soccer</option>
                            <option className="bg-gray-100 text-black" value="american-football">American Football</option>
                        </select>
                        {/* Dropdown Icon */}
                        <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white h-3 pointer-events-none" />
                    </div>
                </div>
                <div className="col-span-6 md:col-span-1 ">
                    <button className="bg-primarySolid  h-full w-full flex justify-center items-center text-white px-2 py-2 md:py-3 rounded-full hover:bg-blue-700 focus:outline-none text-2xl">
                        <FaSlidersH />
                    </button>
                </div>

                {
                    !selectedTeam && teamProfileLoading && <div className={`col-span-12`}><Loading /></div>
                }
                {
                    !selectedTeam && !teamProfileLoading && <div className={`col-span-12`}>

                        <div className="flex flex-col rounded-xl  items-center justify-center p-6 text-gray-400">
                            <FaSearch className="w-10 h-10 mb-2" />
                            <p >Search for a team and select it.</p>
                        </div>
                    </div>
                }
                {
                    selectedTeam &&
                    <>
                        <div className="col-span-12">
                            <TeamCard selectedTeam={normalizeSelectedTeamData(selectedTeam, selectedTeamSports)} favoritesLoading={favoritesLoading} />
                        </div>

                        {
                            selectedTeam?.players && selectedTeam?.players.length &&
                            <div className="col-span-12">
                                <PlayerCardsList sportsName={selectedTeamSports} teamName={selectedTeam?.name} players={selectedTeam?.players} />
                            </div>}

                        {selectedTeamStats.length > 0 &&
                            <>
                                {/* Statistics details */}

                                <div className="col-span-12">
                                    <h1 className="text-2xl font-bold text-white">Team Statistics</h1>
                                </div>
                                <div className="col-span-12">
                                    <TeamStatistics statsData={selectedTeamStats} />
                                </div>

                                {/* Roster Details */}
                                <div className="col-span-12">
                                    <h1 className="text-2xl font-bold text-white">Roster Details</h1>
                                </div>

                                {/* Player Table */}
                                {/* <div className="col-span-12 lg:col-span-6">
                                    <PlayerTable
                                        headers={TeamInsightTableData.headers} // Pass headers
                                        rows={TeamInsightTableData.rows} // Pass rows
                                    />
                                </div> */}

                                {/* Roster Area Chart */}
                                <div className="col-span-12 h-full lg:col-span-12">
                                    <RosterAreaChart data={selectedTeamStats} />
                                </div>

                                {/* Performance Chart */}
                                <div className="col-span-12">
                                    <h1 className="text-2xl font-bold text-white">Performance Updates</h1>
                                </div>

                                {/* Players Area Chart */}
                                <div className="col-span-12">
                                    <TeamAreaChart data={selectedTeamStats} />
                                </div>

                                {/* Performance Chart */}
                                <div className="col-span-12">
                                    <h1 className="text-2xl font-bold text-white">Performance Chart</h1>
                                </div>

                                {/* Earning Bar Chart */}
                                <div className="col-span-12 lg:col-span-8">
                                    <EarningBarChart data={selectedTeamStats} />
                                </div>

                                {/* Players Pie Chart */}
                                <div className="col-span-12 lg:col-span-4">
                                    <TeamsPieChart data={selectedTeamStats} /> {/* Pass TeamPieChartData as prop */}
                                </div>
                            </>}
                    </>
                }
            </div>
        </div >
    );
};

export default TeamInsight;
