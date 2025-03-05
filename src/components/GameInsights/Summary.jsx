
const Summary = ({ events, teams, score, status, detailsLoading }) => {

    return (
        <div className="p-6 bg-secondary rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-5 text-white text-center">Match Summary</h2>

            {/* Match Status */}
            <div className="flex justify-center items-center mb-5">
                <span className={`px-4 py-1 text-sm font-semibold rounded-full ${status?.short === "FT" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"}`}>
                    {status?.long?.toUpperCase() || "UNKNOWN"}
                </span>
            </div>

            {/* Teams & Scores */}
            {teams && score && (
                <div className="p-6 mb-6 rounded-lg  shadow-md">
                    {/* Team Names & Final Score */}
                    <div className="flex justify-between items-center pb-4 border-b border-gray-600">
                        <div className="flex items-center gap-4">
                            <img src={teams.home.logo} alt={teams.home.name} className="w-12 h-12" />
                            <span className="text-2xl hidden md:block font-semibold text-white">{teams.home.name}</span>
                        </div>
                        <div className="text-2xl md:text-4xl font-extrabold text-white">
                            {score.fulltime?.home !== undefined && score.fulltime?.away !== undefined
                                ? `${score.fulltime.home} - ${score.fulltime.away}` // Soccer format
                                : `${score.home.total} - ${score.away.total}`}
                            {/* American football format */}
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-2xl hidden md:block font-semibold text-white">{teams.away.name}</span>
                            <img src={teams.away.logo} alt={teams.away.name} className="w-12 h-12" />
                        </div>
                    </div>

                    {/* Score Breakdown */}
                    <div className="mt-4 grid grid-cols-2 gap-6 text-center text-gray-300 text-sm">
                        {/* Soccer Score Breakdown */}
                        {score.halftime ? (
                            <>
                                <div className="p-3  rounded-md">
                                    <p className="text-white font-semibold">Halftime</p>
                                    <p className="text-lg">{score.halftime.home} - {score.halftime.away}</p>
                                </div>
                                <div className="p-3  rounded-md">
                                    <p className="text-white font-semibold">Full-time</p>
                                    <p className="text-lg">{score.fulltime.home} - {score.fulltime.away}</p>
                                </div>
                                {score.extratime?.home !== null && score.extratime?.away !== null && (
                                    <div className="p-3 col-span-2  rounded-md">
                                        <p className="text-white font-semibold">Extra Time</p>
                                        <p className="text-lg">{score.extratime.home} - {score.extratime.away}</p>
                                    </div>
                                )}
                                {score.penalty?.home !== null && score.penalty?.away !== null && (
                                    <div className="p-3 col-span-2  rounded-md">
                                        <p className="text-white font-semibold">Penalties</p>
                                        <p className="text-lg">{score.penalty.home} - {score.penalty.away}</p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                {/* American Football Score Breakdown */}
                                <div className="p-3  border-gray-700 border rounded-md">
                                    <p className="text-white font-semibold">1st Quarter</p>
                                    <p className="text-lg">{score.home.quarter_1} - {score.away.quarter_1}</p>
                                </div>
                                <div className="p-3 border-gray-700 border  rounded-md">
                                    <p className="text-white font-semibold">2nd Quarter</p>
                                    <p className="text-lg">{score.home.quarter_2} - {score.away.quarter_2}</p>
                                </div>
                                <div className="p-3 border-gray-700 border  rounded-md">
                                    <p className="text-white font-semibold">3rd Quarter</p>
                                    <p className="text-lg">{score.home.quarter_3} - {score.away.quarter_3}</p>
                                </div>
                                <div className="p-3 border-gray-700 border  rounded-md">
                                    <p className="text-white font-semibold">4th Quarter</p>
                                    <p className="text-lg">{score.home.quarter_4} - {score.away.quarter_4}</p>
                                </div>
                                {score.home.overtime !== null && (
                                    <div className="p-3 col-span-2 border-gray-700 border  rounded-md">
                                        <p className="text-white font-semibold">Overtime</p>
                                        <p className="text-lg">{score.home.overtime} - {score.away.overtime}</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}



            {/* Match Events */}
            {events &&
                <>
                    <h3 className="text-xl font-semibold text-white mb-3">Match Events</h3>
                    <ul className="space-y-4">
                        {events.map((event, index) => (
                            <li key={index} className="flex items-center gap-2 p-3 border-b border-gray-700  transition ">
                                <span className="text-sm text-gray-400">
                                    {event.time.elapsed}'{event.time.extra ? `+${event.time.extra}` : ''}
                                </span>
                                <img src={event.team.logo} alt={event.team.name} className="w-6 h-6" />
                                <span className="text-white font-semibold">{event.player.name}</span>
                                <span className="text-gray-300 text-sm">{event.detail}</span>
                                {event.assist?.name && (
                                    <span className="text-gray-400 text-xs"> (Assist: {event.assist.name})</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </>}
        </div>
    );
};

export default Summary;
