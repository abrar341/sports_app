import React from 'react'
import EventsBar from '../components/EventsBar/EventsBar'
import Header from '../components/Header&Footer/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <EventsBar />
            <Header />
            <div className=''>
                {/* Render nested routes dynamically */}
                <Outlet />
                {/* <Dashboard /> */}
            </div>
        </div>
    )
}

export default MainLayout
