import React, {useState} from 'react'

import NavbarStyle from '../../../styles/components/Navbar/NavbarStyle'

import loginImage from '../../../assets/hboMaxLogin.png'
import menu from '../../../assets/icons/menu.svg'
import Swal from "sweetalert2";


function login() {
    Swal.fire({
        imageUrl: loginImage,
        imageAlt: 'Custom image',
        background: '#E6E7E8',
        width: 420,
        html: `
            <div class='login_inputs__container'>
                <label>Contraseña</label>
                <input type="text" id="name" >
                <label>Contraseña</label>
                <input type="password" id="surName" >
                <a>
                    ¿Olvidaste tu contraseña?
                </a>

                <a>
                    ¿Aún no estas registrado?
                </a>
            </div>
            `
        ,
        showCancelButton: false,
        confirmButtonText: 'Iniciar Sesión',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          window.open('/capacitaciones', '_self')
        }
      })
}



export default function Navbar(props) {
    const [active, setActive] = useState(false)
    console.log(props.logos)
    return (
        <div className={NavbarStyle}>
            <div className='logos'>
              {
                props.logos
                ? props.logos.map((e)=> (
                  <img src={e.logo}/>
                ))
                : null
              }
            </div>

            <div className='login_seccion'>
                <h4 className='login_title' onClick={login}>Iniciar sesión</h4>
                <img className='login_closed-icon' onClick={()=> setActive(!active)} src={menu}/>
                { 
                    active === true
                    ?
                <div className='menu_container'>
                    <ul className='menu_list'>
                        <li>Perfil</li>
                        <li>Proximos eventos</li>
                        <li>Capacitaciones</li>
                        <li>Aliados</li>
                    </ul>
                </div>
                    : null
                }
            </div>
        </div>
    )
}