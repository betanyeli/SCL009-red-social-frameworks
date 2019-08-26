import React from 'react'
import { Link } from 'react-router-dom'
import Woman from '../Assets/woma-user.png'

const TemplateProfile = () => {
    return (
        <div className="first-screen">
        <div className="container-login">
          <div className="header-login">
            <img className="icon-user" src={Woman}></img>
            <p id="welcome"></p>
          </div>
          <div className="content-login">
            <button className="btn-sign-out" id="sign-out">Cerrar sesión</button>
            <textarea name="post" id="post" cols="30" rows="10"></textarea>
            <button className="btn-posting" id="posting">Publicar</button>
            <Link to="./sos"><p id="btn-sos">¿Necesitas ayuda?, pincha aquí</p></Link>
          </div>
        </div>
      </div>  
    )
}

export default TemplateProfile;