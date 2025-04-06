import { CloudRain, Sun, Thermometer } from 'lucide-react'
import moment from 'moment'
import React from 'react'

const Weather = ({ weatherInfluence, match }) => {
    return (
        <div className='bg-secondary p-6 rounded-xl text-white h-full'>
            {/* Weather Condition */}
            <p className="text-lg font-semibold tracking-wide text-gray-200 text-center">
                {weatherInfluence.condition}
            </p>

            {/* Weather Icon */}
            <div className="flex justify-center my-4">
                {weatherInfluence.condition.includes("rain") ? (
                    <CloudRain size={50} className="text-gray-300" />
                ) : (
                    <Sun size={50} className="text-yellow-400" />
                )}
            </div>

            {/* Match Location & Date */}
            <div className="text-center border-t border-gray-500 pt-4 mt-3">
                <p className="text-sm text-gray-300">
                    {moment(match.date).format("MMMM D, YYYY")}
                </p>
            </div>

            {/* Temperature & Controls */}
            <div className="flex justify-between items-center mt-4">
                <Thermometer size={20} className="text-gray-300" />
                <p className="text-2xl font-bold">{weatherInfluence.temperature}°C</p>
            </div>


        </div>
    )
}

export default Weather
