
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


import "../globales.css";
import bgImage1 from '../assets/harryPotter_background.png'
import bgImage2 from '../assets/bg_plataforma-1.png'

import bgHboMax from '../assets/bg_plataforma-hboMax.png'

// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';
import CarrouselPage from "../components/CarrouselPage/CarrouselPage";
import Navbar from "../components/Layout/Navbar/Navbar";
import PrincipalPagesStyle from "../styles/pages/PrincipalPageStyle/PrincipalPageStyle";
import PrincipalPagesBlueStyle from "../styles/pages/PrincipalPageStyle/PrincipalPageBlueStyle";
import PrincipalPagesGoldenStyle from "../styles/pages/PrincipalPageStyle/PrincipalPagesGoldenStyle";

// install Swiper modules
SwiperCore.use([Pagination]);


const principalPages = [
  {
    pages: 'hbo',
    color: 'blue',
    buttonColor: '#9434D8',
    content: [
      {
        banner: bgImage1,
        title: 'hbo 1',
        test: ''
      },
      {
        banner: bgImage2,
        title: 'hbo banner 2',
        test: ''
      },
      {
        banner: bgImage1,
        title: 'hbo banner 3',
        test: ''
      },
      {
        banner: bgImage2,
        title: 'hbo banner 4',
        test: ''
      },
    ]
  },
  {
    pages: 'hboMax',
    color: 'golden',
    buttonColor: '#9434D8',
    content: [
      {
        banner: bgHboMax,
        title: 'hboMax banner1',
        test: ''
      },
      {
        banner: bgHboMax,
        title: 'hboMax banner2',
        test: ''
      },
      {
        banner: bgHboMax,
        title: 'hboMax banner3',
        test: ''
      },
      {
        banner: bgHboMax,
        title: 'hboMax banner4',
        test: ''
      },
    ]
  },
  {
    pages: 'warner',
    color: 'golden',
    buttonColor: '#9434D8',
    content: [
      {
        banner: bgHboMax,
        title: 'warner banner1',
        test: ''
      },
      {
        banner: bgHboMax,
        title: 'warner banner2',
        test: ''
      },
      {
        banner: bgHboMax,
        title: 'warner banner3',
        test: ''
      },
      {
        banner: bgHboMax,
        title: 'warner banner4',
        test: ''
      },
    ]
  },
]

export default function Capacitaciones() {
  const [page, setpage] = useState('hboMax')
  return (
    <>
        <Navbar ></Navbar>
          {
            principalPages.map((p) => {
              if (page === p.pages) {
                if (p.color == 'blue') {
                  return (
                    <Swiper direction={'vertical'} mousewheel={true} pagination={{ "clickable": true }} className={`${PrincipalPagesBlueStyle} mySwiper`}>
                        {
                          p.content.map(e => (
                            <SwiperSlide className='hbo' >
                              <CarrouselPage setPage={setpage} buttonColor={p.buttonColor} content={e}></CarrouselPage>
                            </SwiperSlide>
                          ))
                        }
                    </Swiper>
                 )
                }
                if (p.color == 'golden') {
                  return (
                    <Swiper direction={'vertical'} mousewheel={true} pagination={{ "clickable": true }} className={`${PrincipalPagesGoldenStyle} mySwiper`}>
                        {
                          p.content.map(e => (
                            <SwiperSlide className='hbo' >
                              <CarrouselPage setPage={setpage} buttonColor={p.buttonColor} content={e}></CarrouselPage>
                            </SwiperSlide>
                          ))
                        }
                    </Swiper>
                 )
                }
              }

            }
            )
          }
    </>
  )
}