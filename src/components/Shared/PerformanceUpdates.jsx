import { useState, useRef, useEffect } from "react";
import DropDownMenu from "./DropDownMenu"; // Import the reusable dropdown component
import playersData from "../PlayersInsights/PlayerData"; // Import the separated players data
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import the arrow icons

const PerformanceUpdates = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState("Choose Player"); // State for selected player
    const dropdownButtonRef = useRef(null);
    const dropdownMenuRef = useRef(null);

    const handlePlayerSelect = (selectedPlayer) => {
        console.log("Selected Player:", selectedPlayer.label);
        setSelectedPlayer(selectedPlayer.label); // Update the selected player
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    const toggleDropdownState = (event) => {
        event.stopPropagation(); // Prevent click propagation to the document
        setIsDropdownOpen((prevState) => !prevState);
    };

    const closeDropdownOnOutsideClick = (event) => {
        // Close dropdown only if the click is outside the button and menu
        if (
            dropdownButtonRef.current &&
            !dropdownButtonRef.current.contains(event.target) &&
            dropdownMenuRef.current &&
            !dropdownMenuRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false); // Close dropdown if clicked outside
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeDropdownOnOutsideClick);
        return () => {
            document.removeEventListener("mousedown", closeDropdownOnOutsideClick);
        };
    }, []);

    return (
        <div className="py-4 rounded-lg col-span-12 flex justify-between items-center">
            {/* Left Section: Title */}
            <h2 className="text-2xl font-bold text-white">Performance Updates</h2>

            {/* Right Section: Dropdown */}
            <div className="relative w-48">

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div ref={dropdownMenuRef}>
                        <DropDownMenu
                            isOpen={isDropdownOpen}
                            options={playersData}
                            onSelect={(selectedPlayer) => handlePlayerSelect(selectedPlayer)}
                            menuClassName="bg-white text-blue-900 mt-2"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PerformanceUpdates;
