import PlayerCard from "../Shared/PlayerCard";
import PlayerInsightSearchBar from "../Shared/PlayerInsightSearchBar";
import PlayersAreaChart from "../Shared/PlayersAreaChart";
import PlayersPieChart from "../Shared/PlayersPieChart";
import { useCallback, useEffect, useState } from "react";
import { getFavourites } from "../../Api/Player/SearchPlayer";
import PlayerStatistics from "./PlayerStats";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown, FaSearch, FaSlidersH } from "react-icons/fa";
import Loading from "../Shared/Loading";
import { normalizeSelectedPlayerData } from "../../utils/normalizeData";
import { setFavoritePlayersOfSelectedPlayerSport } from "../../slices/favoritesSlice";
import { EmptyState } from "../Shared/EmptyState";
import usePlayerActions from "../../hooks/usePlayerActions";

// addFavoriteTeamsOfSelectedTeamSport

const PlayersInsights = () => {
  const { selectedPlayer, selectedPlayerStats } = useSelector(
    (state) => state.selection
  );
  const { playerProfileLoading, playerStatsLoading } = useSelector(
    (state) => state.loading
  );
  const { favoritePlayersOfSelectedPlayerSport } = useSelector(
    (state) => state.favorites
  );

  const [sportsName, setSportsName] = useState("soccer");
  const { selectedPlayerSports } = useSelector((state) => state.selection); // Get from Redux
  const dispatch = useDispatch();
  const {
    handleSearch,
    handleSelectPlayer,
    handleSelectAmericanFootballPlayer,
  } = usePlayerActions();

  const [favoritesLoading, setFavoritesLoading] = useState(false);

  const fetchFavouritePlayers = useCallback(async () => {
    setFavoritesLoading(true);
    try {
      if (!selectedPlayerSports) return;

      const response = await getFavourites(selectedPlayerSports);
      const favourites = response?.data?.favourites?.[0];
      if (favourites) {
        dispatch(
          setFavoritePlayersOfSelectedPlayerSport(favourites.players || [])
        );
      }
    } catch (error) {
      console.error("Error fetching favourite players:", error);
    }
    setFavoritesLoading(false);
  }, [dispatch, selectedPlayerSports]);

  useEffect(() => {
    if (favoritePlayersOfSelectedPlayerSport.length === 0) {
      fetchFavouritePlayers();
    }
    // fetchFavouritePlayers();
  }, [fetchFavouritePlayers, selectedPlayerSports]);

  return (
    <div className="text-white min-h-screen overflow-clip px-5 py-8 sm:px-8 sm:py-8">
      {/* Grid Section */}
      <div className=" grid grid-cols-12 gap-3 md:gap-6">
        {/* Player Insight Search Bar */}
        <div className="col-span-12  flex md:col-span-11 ">
          {/* <PlayerInsightSearchBar /> */}
          <PlayerInsightSearchBar
            sportsName={sportsName}
            onSearch={handleSearch}
            onSelect={
              sportsName === "soccer"
                ? handleSelectPlayer
                : handleSelectAmericanFootballPlayer
            }
          />

          <div className="relative w-1/6 ">
            <select
              value={sportsName}
              onChange={(e) => setSportsName(e.target.value)}
              className="bg-[rgba(255,255,255,0.32)] w-full h-full text-white px-4 py-2 md:py-3 
                                       rounded-r-full focus:outline-none appearance-none pr-10 text-end"
            >
              <option className="bg-gray-200 text-black" value="soccer">
                Soccer
              </option>
              <option
                className="bg-gray-100 text-black"
                value="american-football"
              >
                Football
              </option>
            </select>
            {/* Dropdown Icon */}
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white h-3 pointer-events-none" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-1 ">
          <button className="bg-primarySolid  h-full w-full flex justify-center items-center text-white px-2 py-2 md:py-3 rounded-full hover:bg-blue-700 focus:outline-none text-2xl">
            <FaSlidersH />
          </button>
        </div>

        {/* Sports Dropdown */}
        {!selectedPlayer && playerProfileLoading && (
          <div className={`col-span-12`}>
            <Loading />
          </div>
        )}
        {!selectedPlayer && !playerProfileLoading && (
          <div className={`col-span-12`}>
            <EmptyState
              icon={FaSearch}
              message="Search for a player and select it."
            />
          </div>
        )}

        {/* Single Player Card */}
        {selectedPlayer && (
          <>
            <div className="col-span-12 ">
              {/* sm:col-span-6 lg:col-span-4 */}
              <PlayerCard
                selectedPlayer={normalizeSelectedPlayerData(
                  selectedPlayer,
                  selectedPlayerSports
                )}
                playerStats={selectedPlayerStats}
                favoritesLoading={favoritesLoading}
              />
            </div>

            {/* Alerts Section */}
            {/* <div className="col-span-12 sm:col-span-6 lg:col-span-8">
                            <AlertCard />
                        </div> */}

            {selectedPlayerStats?.length > 0 ? (
              <>
                {!playerProfileLoading && (
                  <h2 className="text-2xl py-2 px-1 col-span-12 font-bold  text-white">
                    Player Statistics
                  </h2>
                )}
                <div className="col-span-12">
                  <PlayerStatistics
                    data={selectedPlayerStats}
                    sportType={selectedPlayerSports}
                  />
                </div>

                {/* Performance Updates */}
                <div className="col-span-12 ">
                  <PlayersAreaChart
                    data={selectedPlayerStats}
                    sportType={selectedPlayerSports}
                  />
                </div>

                {/* <div className="col-span-12">
                                        <PlayersComparison />
                                    </div> */}

                {/* Table Section */}
                {/* <div className="col-span-12 xl:col-span-7">
                                        <PlayerTable />
                                    </div> */}

                {/* Pie Chart Section */}
                <div className="col-span-12 xl:col-span-5">
                  <PlayersPieChart
                    stats={selectedPlayerStats}
                    sport={selectedPlayerSports}
                  />{" "}
                  {/* Pass pieChartData as prop */}
                </div>
              </>
            ) : !playerStatsLoading ? (
              <div className="col-span-12 text-center bg-secondary py-4 rounded-xl">
                Stats not available for this player
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PlayersInsights;
