import { useDispatch, useSelector } from "react-redux";
import {
    setTeamProfileLoading,
    setTeamStatsLoading,
    setSelectedTeam,
    setSelectedTeamStats
} from "../slices"; // Adjust path as needed
import { getTeamProfile, searchTeam } from "../Api/Team/SearchTeam";
import { useNavigate } from "react-router-dom";
import { setSelectedTeamSports } from "../slices/selectionSlice";
import { setFavoriteTeamsOfSelectedTeamSport } from "../slices/favoritesSlice";

const useTeamActions = () => {
    const { selectedTeamSports } = useSelector((state) => state.selection);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // Function to select a team and fetch team details
    const handleSelectTeam = async (team, sportsName) => {

        if (sportsName && sportsName !== selectedTeamSports) {
            dispatch(setSelectedTeamSports(sportsName))
            dispatch(setFavoriteTeamsOfSelectedTeamSport([]))
        }

        if (location.pathname !== "/team-insight") {
            navigate("/team-insight");
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100); // Small delay to ensure scroll after navigation
        }
        try {
            dispatch(setTeamProfileLoading(true));
            dispatch(setTeamStatsLoading(true));

            const { data } = await getTeamProfile(team.teamId, sportsName);

            if (Array.isArray(data)) {
                if (data.length > 0) {
                    dispatch(setSelectedTeam(data?.team));
                } else {
                    console.warn("Profile data array is empty.");
                    dispatch(setSelectedTeam(null));
                }
            } else if (data) {
                if (sportsName === "soccer") {
                    dispatch(setSelectedTeam(data.team));
                    dispatch(setSelectedTeamStats(data?.TeamStatistics));
                } else {
                    dispatch(setSelectedTeam(data));
                    dispatch(setSelectedTeamStats([]));
                }
            } else {
                console.warn("No profile data found for the selected team.");
            }
        } catch (error) {
            console.error("Error fetching team profile:", error);
        } finally {
            dispatch(setTeamProfileLoading(false));
            dispatch(setTeamStatsLoading(false));
        }
    };

    // Function to search for teams
    const SearchTeam = async (query, sportsName) => {
        return await searchTeam(query, sportsName); // Returns team list
    };

    return { handleSelectTeam, SearchTeam };
};

export default useTeamActions;
