import React, { useRef, useCallback } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import ArrowRight from '../../assets/icons/arrow-right-2.svg'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import './styles.css';

const dates = [
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
    day: 10
  },
  {
    month: "Sept",
    day: 11
  },
  {
    month: "Sept",
    day: 12
  },
  {
    month: "Sept",
    day: 12
  },
  {
    month: "Sept",
    day: 12
  },
  {
    month: "Sept",
    day: 12
  }
];

export default function CalendarSlider() {
  const swiperRef = useRef(null);
  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);
  return (
    <div style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
      <div className="left-floating-el" onClick={prevSlide}>
        <img src={ArrowLeft} alt="prev" />
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        ref={swiperRef}
        // spaceBetween={-80}
        slidesPerView={6}
        onSlideChange={() => console.log('slide change')}
        style={{ maxWidth: "50vw"}}
      >
        {dates.map((date) => (
          <SwiperSlide style={{ backgroundColor: "transparent"}}>
            <button style={{ cursor: "pointer", backgroundColor: date.day === 6 ? '#9434D8' : 'white', color: date.day === 6 ? 'white' : '#8D8D8D', fontWeight: 700, height: 64, width: 58, borderRadius: 20, border: "none" }}>
              {date.month} <br /> {date.day}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="right-floating-el" onClick={nextSlide}>
        <img src={ArrowRight} alt="next" />
      </div>
    </div>
  );
}