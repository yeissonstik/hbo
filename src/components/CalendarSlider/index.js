import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

const dates = [
{
  month: "Sept",
  day: 1
},
{
  month: "Sept",
  day: 2
},
{
  month: "Sept",
  day: 3
},
{
  month: "Sept",
  day: 4
},
{
  month: "Sept",
  day: 5
},
{
  month: "Sept",
  day: 6
},
{
  month: "Sept",
  day: 7
},
{
  month: "Sept",
  day: 8
},
{
  month: "Sept",
  day: 9
},
{
  month: "Sept",
  day: 9
},
{
  month: "Sept",
  day: 9
},
{
  month: "Sept",
  day: 9
},
];

export default function CalendarSlider () {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation,Pagination,Scrollbar, A11y]}
      navigation
      slidesPerView={7}
      onSlideChange={() => console.log('slide change')}              
      style={{maxWidth: "45vw", margin:"auto"}}
    >
    {dates.map((date)=>(
      <SwiperSlide style={{backgroundColor:"transparent"}}>        
        <button style={{backgroundColor:date.day===6 ? '#9434D8':'white',color:date.day===6 ? 'white':'#8D8D8D', fontWeight:700,height: 64, width: 58, borderRadius: 20, border:"none"}}>
        {date.month} <br/> {date.day}
        </button>
      </SwiperSlide>
      ))}            
    </Swiper>
  );
}