import MatchCardsList from "./MatchCardsList";
import EventBarDropDown from "./EventBarDropDown";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAFFixtures, fetchFixtures } from "../../slices/fixturesSlice";

const EventsBar = () => {
    const { selectedSport, selectedLeague } = useSelector((state) => state.eventBar);
    const gameInsightSelectedGame = useSelector((state) => state.fixtures.gameInsightSelectedGame);

    const dispatch = useDispatch();

    const { AFcompletedFixtures, completedFixtures, fixturesLoading } = useSelector((state) => state.fixtures);
    useEffect(() => {
        if (selectedSport === 'soccer') {
            if (!completedFixtures.data) {
                dispatch(fetchFixtures());
            }
        } else if (selectedSport === 'american-football') {
            if (!AFcompletedFixtures.data) {
                dispatch(fetchAFFixtures());
            }
        }

    }, [selectedSport]);

    return (
        <div className="relative bg-[#001745] z-50 text-white py-2 px-4 flex items-center justify-between ">
            {/* Left Section */}
            <div className="flex w-[150px] mt-2 flex-col items-center space-y-2">
                <EventBarDropDown type="sports" /> {/* Sports Dropdown */}
                <EventBarDropDown fixturesLoading={fixturesLoading} type="leagues" /> {/* Leagues Dropdown */}
            </div>

            {/* Middle Section */}
            <div className="flex-1  z-10 mt-2 px-2 w-full h-full flex items-center overflow-hidden">
                <MatchCardsList selectedGame={selectedSport} selectedLeague={selectedLeague} />
            </div>
        </div>
    );
};

export default EventsBar;
