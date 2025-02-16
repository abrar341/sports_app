import React from "react";

export const MatchList = () => {
    const matchData = [
        {
            matchup: "Team A Vs Team B",
            moneyline: "2.5",
            over: "210.5",
            spread: "+5.5",
            time: "07:30pm",
            trends: "red-chart.png", // Replace with actual image source
        },
        {
            matchup: "12/15/2023",
            moneyline: "$9.99",
            over: "Pro",
            spread: "Paid",
            time: "07:30pm",
            trends: "green-chart.png", // Replace with actual image source
        },
        {
            matchup: "12/15/2023",
            moneyline: "$9.99",
            over: "Pro",
            spread: "Failed",
            time: "07:30pm",
            trends: "red-chart.png", // Replace with actual image source
        },
    ];

    return (
        <div className="mt-6 w-full text-lg text-center">
            {/* Header */}
            <div className="bg-primarySolid text-white rounded-xl border border-white border-opacity-20 py-3 px-4">
                <div className="grid grid-cols-6 gap-4 font-semibold">
                    <p>Matchup</p>
                    <p>Moneyline</p>
                    <p>Over</p>
                    <p>Spread</p>
                    <p>Time</p>
                    <p>Trends</p>
                </div>
            </div>

            {/* Rows */}
            {matchData.map((match, index) => (
                <div
                    key={index}
                    className="grid grid-cols-6 gap-4 items-center bg-secondary text-white border border-white border-opacity-20 rounded-xl py-3 px-4 mt-2"
                >
                    <p>{match.matchup}</p>
                    <p>{match.moneyline}</p>
                    <p>{match.over}</p>
                    <p>{match.spread}</p>
                    <p>{match.time}</p>
                    <div className="flex justify-center items-center">

                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/acac31c3ee897d5dbb56a3a40a593013380a34183fab90b3037d5245199ceb56?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                            className="object-contain shrink-0 self-stretch rounded-sm aspect-[2.72] w-[90px]"
                            alt="Match status"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MatchList;

