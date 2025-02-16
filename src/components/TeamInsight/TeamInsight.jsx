import TeamInsightSearchBar from "../Shared/TeamInsightSearchBar";
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
import { FaRegSadTear, FaSearch } from "react-icons/fa";

const TeamInsight = () => {
    const { selectedTeam, selectedTeamStats } = useSelector((state) => state.selection);
    useFetchFavouritePlayers();

    const { handleSelectTeam, SearchTeam } = useTeamActions();
    const { teamProfileLoading } = useSelector((state) => state.loading); // Get loading states

    return (
        <div className="text-white min-h-screen overflow-clip p-8">
            <div className=" grid  grid-cols-12 gap-6">
                {/* Player Insight Search Bar */}
                <div className={`col-span-12 `}>
                    <TeamInsightSearchBar onSearch={SearchTeam} onSelect={handleSelectTeam} />
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
                            <TeamCard

                                {...selectedTeam || {
                                    name: "Team name",
                                    code: "TN",
                                    country: "Country",
                                    founded: 1999,
                                    logo: "https://media.api-sports.io/football/teams/34.png",
                                    venue: {
                                        name: "St. James' Park",
                                        city: "Newcastle upon Tyne",
                                        capacity: 52758,
                                        surface: "grass",
                                    },
                                }}
                            />
                        </div>

                        {/* Header */}
                        <div className="col-span-12">
                            <BarcelonaPlayersHeader name={selectedTeam?.name} />
                        </div>

                        {/* Player Cards */}
                        <div className="col-span-12">
                            <PlayerCardsList />
                        </div>

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
                        <div className="col-span-12 lg:col-span-6">
                            <PlayerTable
                                headers={TeamInsightTableData.headers} // Pass headers
                                rows={TeamInsightTableData.rows} // Pass rows
                            />
                        </div>

                        {/* Roster Area Chart */}
                        <div className="col-span-12 h-full lg:col-span-6">
                            <RosterAreaChart data={selectedTeamStats} />
                        </div>

                        {/* Performance Updates */}
                        {/* <div className="col-span-12">
                    <PerformanceUpdates />
                </div> */}

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
                    </>
                }
            </div>
        </div >
    );
};

export default TeamInsight;
