import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MatchCard = ({ match }) => {
    const navigate = useNavigate()
    const { selectedSport } = useSelector((state) => state.eventBar);
    const { homeTeam, fixtureId, leagueId, awayTeam, live } = match; // Extract normalized match data
    const status = live ? "live" : "completed";
    const handleGameClick = (leagueId, fixtureId, status, selectedSport) => {
        navigate(`/games-insight/${selectedSport}/${leagueId}/${status}/${fixtureId}`);
    };
    return (
        <div onClick={() => handleGameClick(leagueId, fixtureId, status, selectedSport)} className="bg-secondary cursor-pointer text-white p-2 rounded-lg flex flex-col items-start w-full max-w-[200px]">
            <div className="text-xs w-full text-end mb-2 flex items-center justify-end space-x-1">
                {live && <span className="blink-dot"></span>}
                <span className={live ? "text-red-500 font-bold text-xs" : "text-white text-xs"}>{live ? "Live" : "Result"}</span>
            </div>



            <div className="flex items-center justify-between w-full mb-1">
                <div className="flex items-center space-x-2">
                    <img loading="lazy" src={homeTeam.logo} alt={homeTeam.name} className="w-5 h-5 rounded-full" />
                    <span className="text-sm">{homeTeam.name}</span>
                </div>
                <span className="font-semibold text-sm">{homeTeam.score}</span>
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                    <img loading="lazy" src={awayTeam.logo} alt={awayTeam.name} className="w-5 h-5 rounded-full" />
                    <span className="text-sm">{awayTeam.name}</span>
                </div>
                <span className="font-semibold text-sm">{awayTeam.score}</span>
            </div>
            {match.overs && <div className="text-gray-300 text-xs mt-1">{match.overs}</div>}
        </div>
    );
};

MatchCard.propTypes = {
    match: PropTypes.shape({
        homeTeam: PropTypes.shape({
            name: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
            score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
        }).isRequired,
        awayTeam: PropTypes.shape({
            name: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
            score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
        }).isRequired,
        overs: PropTypes.string
    }).isRequired
};

export default MatchCard;
