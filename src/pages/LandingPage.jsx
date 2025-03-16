import React from 'react'
import EventsBar from '../components/EventsBar/EventsBar'
import MainHeader from '../components/Header&Footer/MainHeader'
import SportsAnalyticsHero from '../components/LandingPage/SportsAnalyticsHero.jsx'
import SportsCategorySelector from '../components/LandingPage/SportsCategory/SportsCategorySelector.jsx'
import TrendingNews from '../components/LandingPage/News/TrendingNews.jsx'


const LandingPage = () => {

    return (
        <div className="min-h-screen">

            <EventsBar />
            <MainHeader />
            <div className='bg-primary'>
                <SportsAnalyticsHero />
                <SportsCategorySelector />
                <TrendingNews />
            </div>
        </div>
    )
}

export default LandingPage
