import PropTypes from "prop-types";
import ReusableTable from "../Shared/ReusableTable";
import { TeamInsightTableData } from "./TeamInsightData";
import { useSelector } from "react-redux";
import Loading from "../Shared/Loading";

const PlayerTable = () => {

    const { teamStatsLoading } = useSelector((state) => state.loading); // Get loading states


    return teamStatsLoading ? <Loading /> : (
        <div className="rounded-xl h-full">

            <ReusableTable
                headers={TeamInsightTableData.headers}
                rows={TeamInsightTableData.rows}
                rowsPerPage={4}
            />
        </div>
    );
};

// PlayerTable.propTypes = {
//     headers: PropTypes.arrayOf(PropTypes.string),
//     rows: PropTypes.arrayOf(PropTypes.object),
// };

export default PlayerTable;
