import EventsBar from "../components/EventsBar/EventsBar";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/Header&Footer/MainHeader";
import MainFooter from "../components/Header&Footer/Footer/MainFooter";

const MainLayout = () => {
  return (
    <div className="bg-primary">
      <EventsBar />
      <MainHeader />
      <div className="pt-6">
        {/* Render nested routes dynamically */}
        <Outlet />
      </div>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
