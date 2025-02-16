import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header&Footer/Header";
import EventsBar from "../components/EventsBar/EventsBar";

const DashboardPage = () => {
    const location = useLocation();

    // Define routes where `EventsBar` should be hidden
    const hiddenRoutes = ["/subscription", "/dashboard/setting", "/dashboard/account-setting", "/dashboard/player-team-favourites"];

    return (
        <div className="overflow-clip">
            {/* Show EventsBar only if the current path is NOT in hiddenRoutes */}
            {!hiddenRoutes.includes(location.pathname) && <EventsBar />}
            <Header />
            <div>
                {/* Render nested routes dynamically */}
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardPage;
