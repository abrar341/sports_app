import React from 'react'

const Probability = ({ match, win, weatherInfluence }) => {
    const { homeTeam, awayTeam } = match;
    return (
        <div className='flex flex-col items-center bg-secondary text-white p-6 md:p-8 rounded-xl h-full'>
            {/* Probability Section */}
            <h2 className="text-xl  font-bold uppercase mb-4">Match RESULT Probabilities</h2>

            {/* Probabilities */}
            <div className="flex justify-between mb-2 w-full text-xs font-semibold">
                <span className="text-gray-300 text-xs">{homeTeam.name} <span className="text-white">{win.home}%</span></span>
                <span className="text-gray-300 text-xs">Draw <span>{win.draw}%</span></span>
                <span className="text-gray-300 text-xs">{awayTeam.name} <span className="text-white">{win.away}%</span></span>
            </div>

            {/* Probability Bar */}
            <div className="relative w-full rounded-[2px]  gap-[2px] h-4 overflow-hidden mt-2 flex">
                <div className="bg-red-600 h-full" style={{ width: `${win.home}%` }}></div>
                <div className="bg-gray-400 h-full" style={{ width: `${win.draw}%` }}></div>
                <div className="bg-blue-600 h-full" style={{ width: `${win.away}%` }}></div>
            </div>

            {/* Impact on Game */}
            <div className="mt-4 p-3 rounded-lg text-center">
                <p className="text-base text-gray-400">Wheather conditions {weatherInfluence.impactOnGame}</p>
            </div>
        </div>
    )
}

export default Probability
