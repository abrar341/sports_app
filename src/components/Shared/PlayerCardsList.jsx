import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PlayerCard from "./PlayerCardcopy";
import "../../styles/App.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const PlayerCardsList = ({ sportsName, players, teamName }) => {
    const [selectedSeason, setSelectedSeason] = useState(players[0]?.season || "");

    const handleSeasonChange = (e) => {
        setSelectedSeason(parseInt(e.target.value, 10));
    };

    const selectedRoster =
        players.find((seasonData) => seasonData.season === selectedSeason)?.roster || [];

    return (
        <div className="relative w-full">
            <div className="flex justify-between">
                {/* Season Dropdown */}
                <h2 className="text-2xl font-bold text-white">{teamName || "Team Name"} Players</h2>
                <div className="mb-4">
                    {/* <label className="mr-2 font-semibold">Select Season</label> */}
                    <select
                        value={selectedSeason}
                        onChange={handleSeasonChange}
                        className="p-2  bg-transparent  rounded"
                    >
                        {players.map((seasonData) => (
                            <option key={seasonData.season} value={seasonData.season}>
                                {seasonData.season}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1} // Default for the smallest screen sizes
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1, // From 0px to 767px, show 1 card
                    },
                    768: {
                        slidesPerView: 2, // From 768px to 1023px, show 2 cards
                    },
                    1024: {
                        slidesPerView: 4, // From 1024px and above, show 4 cards
                    },
                }}
            >
                {selectedRoster.map((player, index) => (
                    <SwiperSlide key={index}>
                        <PlayerCard
                            playerId={player.playerId}
                            sportsName={sportsName}
                            name={player.playerRefId.name}
                            position={player.playerRefId.position}
                            image={player.playerRefId.image}
                            number={player.playerRefId.number}
                            group={player.playerRefId.group}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="custom-prev custom-arrow left-[-30px]">
                <GrPrevious />
            </button>
            <button className="custom-next custom-arrow right-[-30px]">
                <GrNext />
            </button>
        </div>
    );
};

export default PlayerCardsList;
