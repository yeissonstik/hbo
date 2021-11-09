
import React, { useRef, useState } from "react";
import HomeStyle  from '../styles/pages/HomeStyles/HomeStyle';
import Logo from '../assets/images/HBO/hboLogo.png';
import Navbar from "../components/Layout/Navbar/Navbar";
import hboMax from '../assets/images/HBOMAX/bannerLogoHboMax.png';
import hboLogo from '../assets/images/HBO/hbo.png';
import warnerMedia from '../assets/images/WARNERMEDIA/warner-image.png'

const Navbarlogos = [
    {
      logo: hboLogo
    },
    {
      logo: hboMax
    },
    {
      logo: warnerMedia
    },
  ]

export default function Home() {
  return (
    <div className={HomeStyle}>
        <Navbar logosList={Navbarlogos}></Navbar>
        <div className='title_container'>
            <div className='title'>
                <div className='rows'>
                    <hr/>
                </div>
                <h1>Bienvenido</h1>
                <div className='rows'>
                    <hr/>
                </div>
            </div>
            <h1>a la plataforma de capacitaciones de</h1>
                <img alt='logo' src={Logo}/>
        </div>
    </div>
  )
}