import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { CarrouselPageStyle } from '../../styles/components/CarrouselPages/CarrouselPagesStyle';
import { Link } from 'react-router-dom';
import TrainingCarousel from '../ TrainingCarousel/TrainingCarousel';
import LinkButtons from '../LinkButtons/LinkButtons';

function CarrouselPage(props) {
    return (
        <>
        <div style={{backgroundImage: `url(${props.content.banner})`, backgroundSize: 'cover'}} className={CarrouselPageStyle}>
            <div className='banner_title__container'>
                <h3 className='banner_title'>
                    {props.content.title}
                    <Link className='banner_title__button' to='/' style={{backgroundColor: props.buttonColor}}>Ver capacitaciones</Link>
                </h3>
            </div>
        </div>
        {/* <TrainingCarousel></TrainingCarousel> */}
        <LinkButtons setPage={props.setPage}></LinkButtons>
        </>
    )
}

export default CarrouselPage;