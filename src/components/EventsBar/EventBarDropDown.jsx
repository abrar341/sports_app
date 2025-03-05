import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import DropdownMenu from "../Shared/DropDownMenu";
import { setSelectedLeague, setSelectedSport } from "../../slices/eventBarSlice";
import EventDropDownData from "./EventDropDownData";
import { AFliveFixtures, liveFixtures } from "../GameInsights/live";

const EventBarDropDown = ({ type, fixturesLoading }) => {
    const dispatch = useDispatch();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { selectedSport, selectedLeague } = useSelector((state) => state.eventBar);

    // Fetch fixtures data from Redux store
    const { completedFixtures } = useSelector((state) => state.fixtures); // Soccer
    const { AFcompletedFixtures } = useSelector((state) => state.fixtures); // American Football

    const dropdownRef = useRef(null);

    // Determine dropdown options
    const sportsOptions = EventDropDownData;
    const isSoccer = selectedSport === "soccer";
    const fixturesData = isSoccer ? completedFixtures : AFcompletedFixtures;
    const liveData = isSoccer ? liveFixtures : AFliveFixtures;

    // Extract leagues from completed and live fixtures
    const completedLeagues = fixturesData?.data?.map((league) => ({
        id: league.leagueId || league.leagueName,
        name: league.leagueName,
    })) || [];

    const liveLeagues = isSoccer
        ? liveData?.data?.map((match) => ({
            id: match.league.id,
            name: match.league.name,
        })) || []
        : liveData?.data?.map((league) => ({
            id: league.leagueName,
            name: league.leagueName,
        })) || [];

    // Merge leagues from both completed and live fixtures (removing duplicates)
    const allLeagues = [...completedLeagues, ...liveLeagues].filter(
        (league, index, self) => index === self.findIndex((l) => l.name === league.name)
    );

    const options = type === "sports" ? sportsOptions : allLeagues;

    const handleSelect = (selectedItem) => {
        if (type === "sports") {
            dispatch(setSelectedSport(selectedItem.sport));
        }
        if (type === "leagues") {
            dispatch(setSelectedLeague(selectedItem.name));
        }
        setIsDropdownOpen(false);
    };

    // Auto-select first league when sport changes
    useEffect(() => {
        if (type === "leagues") {
            const isCurrentLeagueValid = allLeagues.some((league) => league.name === selectedLeague);

            if (!isCurrentLeagueValid) {
                if (allLeagues.length > 0) {
                    dispatch(setSelectedLeague(allLeagues[0].name)); // Set first available league
                } else {
                    dispatch(setSelectedLeague(null)); // Reset if no leagues exist
                }
            }
        }
    }, [selectedSport, allLeagues, type, selectedLeague, dispatch]);

    useEffect(() => {
        const closeDropdownOnOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", closeDropdownOnOutsideClick);
        return () => {
            document.removeEventListener("mousedown", closeDropdownOnOutsideClick);
        };
    }, []);

    return fixturesLoading ? (
        <div className="flex bg-secondary rounded-xl w-full justify-center items-center py-4">
            <div className="border-4 border-primarySolid border-t-secondary rounded-full animate-spin"></div>
        </div>
    ) : (
        <div className="relative w-full" ref={dropdownRef}>
            <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center justify-between bg-secondary rounded-xl text-white text-sm px-4 py-2 h-full w-full whitespace-nowrap overflow-hidden text-ellipsis"
            >
                {type === "sports" ? selectedSport : selectedLeague || "Select League"}
                <FaChevronDown className="ml-2 w-2 flex-shrink-0" />
            </button>

            <DropdownMenu
                type={type}
                isOpen={isDropdownOpen}
                options={options}
                onSelect={handleSelect}
                menuClassName="bg-white text-blue-900 mt-2"
            />
        </div>
    );
};

export default EventBarDropDown;
