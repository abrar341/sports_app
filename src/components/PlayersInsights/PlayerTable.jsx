import ReusableTable from "../Shared/ReusableTable";
import { tableData } from "../PlayersInsights/PlayerData"; // Import your table data
import { useSelector } from "react-redux";
import Loading from "../Shared/Loading";

const PlayerTable = () => {
    // Define table headers matching the data keys
    const headers = ["Metric", "Player A", "Player B"];

    // Map your `tableData` to match the structure expected by `ReusableTable`
    const rows = tableData.map((row) => ({
        Metric: row.metric,
        "Player A": row.playerA,
        "Player B": row.playerB,
    }));

    const { playerStatsLoading } = useSelector((state) => state.loading);

    return playerStatsLoading ? <Loading /> : (
        <div >
            <ReusableTable headers={headers} rows={rows} rowsPerPage={6} />
        </div>
    );
};

export default PlayerTable;
