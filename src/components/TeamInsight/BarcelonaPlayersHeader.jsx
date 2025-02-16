import { useSelector } from "react-redux";
import HeaderWithDropdown from "../Shared/HeaderWithDropdown";
import TeamInsightData from "../TeamInsight/TeamInsightData"; // Import the options data
import Loading from "../Shared/Loading";

const BarcelonaPlayersHeader = ({ name }) => {
    const { teamStatsLoading } = useSelector((state) => state.loading); // Get loading states

    const handlePlayerSelect = (selectedPlayer) => {
        console.log("Selected Player:", selectedPlayer.label);
    };



    return (



        <div className="bg-transparent text-white rounded-lg">
            <HeaderWithDropdown
                title={name}
                options={TeamInsightData} // Use the imported options
                defaultLabel="See all"
                onSelect={handlePlayerSelect}
            />
        </div>
    );
};

export default BarcelonaPlayersHeader;
