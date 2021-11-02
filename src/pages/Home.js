
import React, { useRef, useState } from "react";
import HomeStyle  from '../styles/pages/HomeStyles/HomeStyle';
import Logo from '../assets/logoHbo.png';
import Navbar from "../components/Layout/Navbar/Navbar";
import hboMax from '../assets/hboMax.png'
import hboLogo from '../assets/hbo.png'
import warnerMedia from '../assets/warnerMedia.png'

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
        <Navbar logos={Navbarlogos}></Navbar>
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