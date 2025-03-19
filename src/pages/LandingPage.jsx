import React from 'react'
import EventsBar from '../components/EventsBar/EventsBar'
import MainHeader from '../components/Header&Footer/MainHeader'
import SportsAnalyticsHero from '../components/LandingPage/SportsAnalyticsHero.jsx'
import SportsCategorySelector from '../components/LandingPage/SportsCategory/SportsCategorySelector.jsx'
import TrendingNews from '../components/LandingPage/News/TrendingNews.jsx'
import MainFooter from '../components/Header&Footer/Footer/MainFooter.jsx'
import ContactForm from '../components/LandingPage/ContactUs/ContactForm.jsx'


const LandingPage = () => {

    return (
        <div className='min-h-screen flex flex-col gap-6'>
            <SportsAnalyticsHero />
            <SportsCategorySelector />
            <TrendingNews />
            <ContactForm />
        </div>
    )
}

export default LandingPage
