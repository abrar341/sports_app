import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DropDownMenu from "../Shared/DropDownMenu"; // Reuse the shared dropdown component
import playersData from "./PlayerData"; // Reuse player data
import "./PlayerInsights.css"; // Import the CSS for styling
import Loading from "../Shared/Loading";
import { useSelector } from "react-redux";

const PlayersComparison = () => {
    const [isPlayerADropdownOpen, setIsPlayerADropdownOpen] = useState(false);
    const [isPlayerBDropdownOpen, setIsPlayerBDropdownOpen] = useState(false);

    const [selectedPlayerA, setSelectedPlayerA] = useState("Player A"); // State for Player A
    const [selectedPlayerB, setSelectedPlayerB] = useState("Player B"); // State for Player B

    const playerADropdownRef = useRef(null);
    const playerBDropdownRef = useRef(null);

    const handleSelectPlayerA = (player) => {
        setSelectedPlayerA(player.label);
        setIsPlayerADropdownOpen(false); // Close dropdown after selection
    };

    const handleSelectPlayerB = (player) => {
        setSelectedPlayerB(player.label);
        setIsPlayerBDropdownOpen(false); // Close dropdown after selection
    };

    const handleOutsideClick = (event) => {
        // Close Player A dropdown if clicked outside
        if (playerADropdownRef.current && !playerADropdownRef.current.contains(event.target)) {
            setIsPlayerADropdownOpen(false);
        }

        // Close Player B dropdown if clicked outside
        if (playerBDropdownRef.current && !playerBDropdownRef.current.contains(event.target)) {
            setIsPlayerBDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const { playerStatsLoading } = useSelector((state) => state.loading);

    return playerStatsLoading ? <Loading /> : (
        <div className="bg-transparent p-4 rounded-lg col-span-12 flex justify-between items-center">
            {/* Left Section: Title */}
            <h2 className="text-2xl font-bold text-white">Players Comparison</h2>

        </div>
    );
};

export default PlayersComparison;
