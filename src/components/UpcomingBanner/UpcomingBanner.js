import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import UpcomingBannerStyle from '../../styles/components/UpcomingBannerStyle/UpcomingBannerStyle';

import bannerImage from '../../assets/images/events-banner.png'

import SwiperCore, {
    Pagination
  } from 'swiper';

function UpcomingBanner() {
    return(
        <div className={UpcomingBannerStyle}>
            <Swiper spaceBetween={0} slidesPerView='1'  mousewheel={true} pagination={{ "clickable": true }} className={`bannerSwiper`}>
                <SwiperSlide style={{backgroundImage: `url(${bannerImage})`}} className='bannerSlide' >
                    
                </SwiperSlide>        
                <SwiperSlide style={{backgroundImage: `url(${bannerImage})`}} className='bannerSlide' >
                    
                </SwiperSlide>        
                <SwiperSlide style={{backgroundImage: `url(${bannerImage})`}} className='bannerSlide'>
                    
                </SwiperSlide>        
                      
            </Swiper>
        </div>
    )
}

export default UpcomingBanner