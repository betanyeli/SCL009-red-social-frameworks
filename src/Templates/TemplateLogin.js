import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Assets/logo.png'
import BtnGoogle from '../Assets/btn-google.png'

const TemplateLogin = () =>{
    return(
        <div className="first-screen">
    <div className="container-login">
        <div className="header-login">
           <img className="logo-login" src={Logo} alt=""></img>
            <div><h1>No More </h1>
            <h6>COMMUNITY</h6></div>
            
        </div>
        <div className="content-login">
            <p id="error-message"></p>
            <input className="form" autocomplete="off" type="text" id="email2" name="email" placeholder="Ingresa tu correo" required></input>
            <input className="form" autocomplete="off" type="password" id="password2" name="password" placeholder="Ingresa tu contraseña" required></input>
            <button className="btn-login" id="sign-in" type="submit">Iniciar Sesión</button>
            <button className="btn-google" id="btn-google"><img className= "icon" alt="" src={BtnGoogle}></img><span>Inicia sesión con Google</span></button>
        </div>
        <div className="footer-login">
            <p id="btn-reset">¿Olvidaste tu contraseña?</p>
            <span>¿No tienes cuenta? <Link to='./register'><p id="">Regístrate</p></Link></span>
        </div>
        </div>
        </div>
    
    )
}

export default TemplateLogin;