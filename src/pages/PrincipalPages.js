
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import "../globales.css";
import bgImage1 from '../assets/images/harryPotter_background.png'
import bgImage2 from '../assets/images/bg_plataforma-1.png'
import bgImage3 from '../assets/images/bg_plataforma-hboMax.png'

import bannerLogoHbo from '../assets/images/HBO/hboLogo.png'
import bannerLogoHboMax from '../assets/images/HBOMAX/logoHbo.png'
import bannerLogoWarnerMedia from '../assets/images/WARNERMEDIA/warnerMediaLogo.png'

import navbarImage1 from '../assets/images/HBO/hbo.png'
import navbarImage2 from '../assets/images/HBOMAX/bannerLogoHboMax.png'
import navbarImage3 from '../assets/images/WARNERMEDIA/warner-image.png'

// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';
import CarrouselPage from "../components/CarrouselPage/CarrouselPage";
import Navbar from "../components/Layout/Navbar/Navbar";
import PrincipalPagesStyle from "../styles/pages/PrincipalPageStyle/PrincipalPageStyle";
import PrincipalPagesBlueStyle from "../styles/pages/PrincipalPageStyle/PrincipalPageBlueStyle";
import PrincipalPagesPurpleStyle from "../styles/pages/PrincipalPageStyle/PrincipalPagePurpleStyle";
import PrincipalPagesGoldenStyle from "../styles/pages/PrincipalPageStyle/PrincipalPagesGoldenStyle";
import LinkButtons from "../components/LinkButtons/LinkButtons";
import CarrouselVideos from "../components/CarrouselVideos/CarrouselVideos";

// install Swiper modules
SwiperCore.use([Pagination]);

const videosHboMax = [
  {
    'name': 'video 1',
    'url': 'https://youtu.be/HguSMW8XveQ',
    'banner': 'http://img.youtube.com/vi/HguSMW8XveQ/0.jpg',
    'id': 'HguSMW8XveQ'
  },
  {
    'name': 'video 1',
    'url': 'https://youtu.be/HguSMW8XveQ',
    'banner': 'http://img.youtube.com/vi/HguSMW8XveQ/0.jpg',
    'id': 'HguSMW8XveQ'
  },
  {
    'name': 'video 1',
    'url': 'https://youtu.be/HguSMW8XveQ',
    'banner': 'http://img.youtube.com/vi/HguSMW8XveQ/0.jpg',
    'id': 'HguSMW8XveQ'
  },
  {
    'name': 'video 1',
    'url': 'https://youtu.be/HguSMW8XveQ',
    'banner': 'http://img.youtube.com/vi/HguSMW8XveQ/0.jpg',
    'id': 'HguSMW8XveQ'
  },
]

const principalPages = [
  {
    pages: 'hboMax',
    color: 'purple',
    buttonColor: '#9434D8',
    navbarImage: navbarImage2,
    content: [
      {
        banner: bgImage1,
        bannerLogo: bannerLogoHboMax,
        title: 'Encuentra la saga completa y disfruta de todo el contenido',
        test: ''
      },
      {
        banner: bgImage2,
        bannerLogo: bannerLogoHboMax,
        title: 'hbo banner 2',
        test: ''
      },
      {
        banner: bgImage1,
        bannerLogo: bannerLogoHboMax,
        title: 'hbo banner 3',
        test: ''
      },
      {
        banner: bgImage2,
        bannerLogo: bannerLogoHboMax,
        title: 'hbo banner 4',
        test: ''
      },
    ],
    videos: videosHboMax
  },
  {
    pages: 'hbo',
    color: 'blue',
    buttonColor: '#161693',
    navbarImage: navbarImage1,
    content: [
      {
        banner: bgImage2,
        bannerLogo: bannerLogoHbo,
        title: 'Encuentra la saga completa y disfruta de todo el contenido',
        test: ''
      },
      {
        banner: bgImage2,
        bannerLogo: bannerLogoHbo,
        title: 'hboMax banner2',
        test: ''
      },
      {
        banner: bgImage2,
        bannerLogo: bannerLogoHbo,
        title: 'hboMax banner3',
        test: ''
      },
      {
        banner: bgImage2,
        bannerLogo: bannerLogoHbo,
        title: 'hboMax banner4',
        test: ''
      },
    ]
  },
  {
    pages: 'warner',
    color: 'golden',
    buttonColor: '#E5B168',
    navbarImage: navbarImage3,
    content: [
      {
        banner: bgImage3,
        bannerLogo: bannerLogoWarnerMedia,
        title: 'Encuentra la saga completa y disfruta de todo el contenido',
        test: ''
      },
      {
        banner: bgImage3,
        bannerLogo: bannerLogoWarnerMedia,
        title: 'warner banner2',
        test: ''
      },
      {
        banner: bgImage3,
        bannerLogo: bannerLogoWarnerMedia,
        title: 'warner banner3',
        test: ''
      },
      {
        banner: bgImage3,
        bannerLogo: bannerLogoWarnerMedia,
        title: 'warner banner4',
        test: ''
      },
    ]
  },
]

export default function Capacitaciones() {
  const [page, setpage] = useState(principalPages[0].pages || '')
  
  return (
    <>
        {/* <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}> */}

          {
            principalPages.map((p) => {
              if (page === p.pages) {
                if (p.color == 'blue') {
                  return (
                    <>
                    <Navbar uniqueLogo={p.navbarImage}></Navbar>
                    <Swiper direction={'vertical'} mousewheel={true} pagination={{ "clickable": true }} className={`${PrincipalPagesBlueStyle} mySwiper`}>
                        
                        {
                          p.content.map(e => (
                            <>
                            <SwiperSlide>
                              <CarrouselPage currentPage={page} setPage={setpage} buttonColor={p.buttonColor} content={e}></CarrouselPage>
                            </SwiperSlide>
                            </>
                          ))
                        }
                    </Swiper>
                      <LinkButtons currentPage={page} buttonColor={p.buttonColor} setPage={setpage}></LinkButtons>
                    <CarrouselVideos currentPage={page}></CarrouselVideos>
                    </>
                 )
                }
                if (p.color == 'purple') {
                  return (
                    <>
                    <Navbar uniqueLogo={p.navbarImage}></Navbar>
                    <Swiper direction={'vertical'} mousewheel={true} pagination={{ "clickable": true }} className={`${PrincipalPagesPurpleStyle} mySwiper`}>
                        {
                          p.content.map(e => (
                            <>
                            <SwiperSlide>
                              <CarrouselPage currentPage={page} setPage={setpage} buttonColor={p.buttonColor} content={e}></CarrouselPage>
                            </SwiperSlide>
                            </>
                          ))
                        }
                    </Swiper>
                    <LinkButtons currentPage={page} buttonColor={p.buttonColor} setPage={setpage}></LinkButtons>
                    <CarrouselVideos currentPage={page}></CarrouselVideos>
                    </>
                 )
                }
                if (p.color == 'golden') {
                  return (
                    <>
                      <Navbar uniqueLogo={p.navbarImage}></Navbar>
                      <Swiper direction={'vertical'} mousewheel={true} pagination={{ "clickable": true }} className={`${PrincipalPagesGoldenStyle} mySwiper`}>
                          {
                            p.content.map(e => (
                              <>
                              <SwiperSlide>
                                <CarrouselPage currentPage={page} setPage={setpage} buttonColor={p.buttonColor} content={e}></CarrouselPage>
                              </SwiperSlide>
                              </>
                            ))
                          }
                      </Swiper>
                      
                      <LinkButtons currentPage={page} buttonColor={p.buttonColor} setPage={setpage}></LinkButtons>
                      <CarrouselVideos currentPage={page}></CarrouselVideos>
                    </>
                 )
                }
              }

            }
            )
          }
        {/* </ReactCSSTransitionGroup> */}
    </>
  )
}