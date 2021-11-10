import React from 'react'
import UserCalendar from '../components/UserCalendar'
import UpcomingEventsStyle from '../styles/pages/UpcomingEventsStyle/UpcomingEventsStyle'
import bannerImage from '../assets/images/events-banner.png'
import Navbar from '../components/Layout/Navbar/Navbar'
import Footer from '../components/Layout/Navbar/Footer'
import UpcomingBanner from '../components/UpcomingBanner/UpcomingBanner'

function UpcomingEvents() {
    return (
        <div className={UpcomingEventsStyle}>
            <Navbar></Navbar>
            <div className='container'>
                <div className='banner'>
                    <h1 className='banner_title'>Proximos eventos</h1>
                    <UpcomingBanner></UpcomingBanner>
                    {/* <img src={bannerImage}/> */}
                </div>
                <div className='calendar'>
                    <UserCalendar ></UserCalendar>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default UpcomingEvents