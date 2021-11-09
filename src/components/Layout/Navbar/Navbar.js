import React, {useState, useEffect} from 'react'

import NavbarStyle from '../../../styles/components/Navbar/NavbarStyle'

import loginImage from '../../../assets/images/hboMaxLogin.png'
import menu from '../../../assets/icons/menu.svg'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';


function login() {
    Swal.fire({
        imageUrl: loginImage,
        imageAlt: 'Custom image',
        background: '#E6E7E8',
        width: 420,
        html: `
            <div class='login_inputs__container'>
                <label>Usuario</label>
                <input type="email" name="email_contacto" id="userName" />
                <label>Contraseña</label>
                <input type="password" id="password" >
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
        preConfirm: () => {
          const login = document.getElementById('userName').value;
          const password = document.getElementById('password').value;
            if (!login && !password) {
                Swal.showValidationMessage(`Porfavor ingresa usuario y contraseña`)
              }
            if (!login) {
                Swal.showValidationMessage(`Porfavor ingresa tu usuario`)
              }
            if (!password) {
                Swal.showValidationMessage(`Porfavor ingresa tu contraseña`)
              }
            return { login: login, password: password }
          },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          sessionStorage.setItem("user", `${result.value.login}`)
          console.log(sessionStorage.getItem("user"))
          window.open('/capacitaciones', '_self')
        }
      })
}



export default function Navbar({logosList, uniqueLogo}) {
    const [active, setActive] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
      let user = sessionStorage.getItem("user");
          if (user) {
              console.log("filtrado ******", user)
              setUser(user)
          }
    })

    return (
        <div className={NavbarStyle}>
            <div className='logos'>
              {
                logosList
                ? logosList.map((e)=> (
                  <img src={e.logo}/>
                  ))
                  : null
                }

              {
                uniqueLogo
                ?
                <img src={uniqueLogo}/>
                : null
              }
            </div>

            <div className='login_seccion'>
                {
                  user
                  ? 
                  <h4 className='login_title' >{user} / <Link to='/' className='login_title' onClick={() => sessionStorage.removeItem('user')}>Cerrar sesion</Link></h4>
                  :
                  <h4 className='login_title' onClick={login}>Iniciar sesión</h4>
                }
                <img className='login_closed-icon' onClick={()=> setActive(!active)} src={menu}/>
                { 
                    active === true
                    ?
                <div onMouseLeave={() => setActive(!active)} className='menu_container'>
                    <ul className='menu_list'>
                        <li><Link style={{color:"white", textDecoration:"none"}} to="/profile">Perfil</Link></li>
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