import React, { useEffect, useState } from 'react'
import EventsBar from '../components/EventsBar/EventsBar'
import MainHeader from '../components/Header&Footer/MainHeader'
import News from '../components/News/News.jsx'
import PlayerStatistics from '../components/PlayersInsights/PlayerStats.jsx'
import playerData from './PlayerData.js'


const LandingPage = () => {



    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900">
            <EventsBar />
            <MainHeader />
            <div className="mt-5">
                Landing Page
            </div>
        </div>
    )
}

export default LandingPage
