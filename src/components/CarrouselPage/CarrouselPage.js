import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { CarrouselPageStyle } from '../../styles/components/CarrouselPages/CarrouselPagesStyle';
import { Link } from 'react-router-dom';

function CarrouselPage({currentPage, content, buttonColor, setPage}) {
    return (
        <>
        <div style={{backgroundImage: `url(${content.banner})`, backgroundSize: 'cover'}} className={CarrouselPageStyle}>
            <div className='banner_title__container'>
                {
                    currentPage === 'hbo'
                    ?
                    <img style={{maxWidth:'300px'}} src={content.bannerLogo}/>
                    : 
                    <img src={content.bannerLogo}/>
                }
                <h5 className='banner_title'>
                    {content.title}
                </h5>
                    <Link className='banner_title__button' to='/events' style={{backgroundColor: buttonColor}}>Ver capacitaciones</Link>
            </div>
        </div>
        {/* <TrainingCarousel></TrainingCarousel> */}
        {/* <LinkButtons currentPage={currentPage} buttonColor={buttonColor} setPage={setPage}></LinkButtons> */}
        </>
    )
}

export default CarrouselPage;