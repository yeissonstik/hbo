
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import "swiper/components/scrollbar/scrollbar.min.css"

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Scrollbar, Mousewheel
} from 'swiper';

// install Swiper modules
SwiperCore.use([Scrollbar,Mousewheel]);


export default function CarrouselVideos() {
  
  
  
  return (
    <>
    <Swiper direction={'horizontal'} slidesPerView={'auto'} freeMode={true} scrollbar={true} mousewheel={true} className="mySwiper">
    <SwiperSlide>
    <h4>Scroll Container</h4>
    <p>2</p>
    <p>12</p>
    <p>27</p>
    <p>12</p>
    <p>2</p>
    <p>10 </p>
    </SwiperSlide>
  </Swiper>
    </>
  )
}