import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header&Footer/Header";
import EventsBar from "../components/EventsBar/EventsBar";

const DashboardPage = () => {
    const location = useLocation();

    // Define routes where `EventsBar` should be hidden
    // const hiddenRoutes = ["/subscription", "/dashboard/setting", "/dashboard/account-setting", "/dashboard/player-team-favourites"];
    // Hide EventsBar if the path includes "/subscription"

    const shouldHideEventsBar = location.pathname.includes("/subscription") ||
        ["/dashboard/setting", "/dashboard/account-setting", "/dashboard/player-team-favourites"].includes(location.pathname);

    return (
        <div className="overflow-clip">
            {/* Show EventsBar only if the current path is NOT in hiddenRoutes */}
            {!shouldHideEventsBar && <EventsBar />}
            <Header />
            <div>
                {/* Render nested routes dynamically */}
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardPage;
