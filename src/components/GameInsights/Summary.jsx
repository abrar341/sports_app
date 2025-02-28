
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
                <div className="p-4 mb-4 rounded-lg ">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-600">
                        <div className="flex items-center gap-3">
                            <img src={teams.home.logo} alt={teams.home.name} className="w-10 h-10" />
                            <span className="text-lg font-semibold text-white">{teams.home.name}</span>
                        </div>
                        <div className="text-3xl font-extrabold text-white">{score.fulltime.home} - {score.fulltime.away}</div>
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-semibold text-white">{teams.away.name}</span>
                            <img src={teams.away.logo} alt={teams.away.name} className="w-10 h-10" />
                        </div>
                    </div>

                    {/* Score Breakdown */}
                    <div className="mt-3 grid grid-cols-2 gap-4 text-center text-gray-300 text-sm">
                        <div className="p-2 ">
                            <p className="text-white font-semibold">Halftime</p>
                            <p>{score.halftime.home} - {score.halftime.away}</p>
                        </div>
                        <div className="p-2 ">
                            <p className="text-white font-semibold">Full-time</p>
                            <p>{score.fulltime.home} - {score.fulltime.away}</p>
                        </div>
                        {score.extratime?.home !== null && score.extratime?.away !== null && (
                            <div className="p-2 bg-gray-700 rounded-md">
                                <p className="text-white font-semibold">Extra Time</p>
                                <p>{score.extratime.home} - {score.extratime.away}</p>
                            </div>
                        )}
                        {score.penalty?.home !== null && score.penalty?.away !== null && (
                            <div className="p-2 bg-gray-700 rounded-md">
                                <p className="text-white font-semibold">Penalties</p>
                                <p>{score.penalty.home} - {score.penalty.away}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Match Events */}
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
        </div>
    );
};

export default Summary;
