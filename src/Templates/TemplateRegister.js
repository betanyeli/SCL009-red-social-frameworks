import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebaseData/firebaseInit'


const TemplateRegister = () => {

  const [alias, setAlias] = useState('') //React hooks with function components
  const [email, setEmail] = useState('') //React hooks with function components
  const [password, setPassword] = useState('') //React hooks with function components

  /*Events button send data to firebase*/
  const registerButton =(event)=>{
    event.preventDefault();

    db.collection("users").add({
      // debo arreglar esta linea
      alias,
      email,
      password
    }).then(() => {
      alert("funciona")
    })
      .catch((error) => {
        alert("no funciona")
        console.log(error.message)
        
      })
  }

  return (
    <div className="first-screen">
      <div className="container-login">
        <div className="content-login">
          <h1>¡Crea tu cuenta ahora!</h1>
          <p id="error-message"></p>
          <input className="form" value={alias}
            onChange={event => setAlias(event.target.value)} type="text" name="name" placeholder="Alias" required></input>
          <input className="form" value={email}
            onChange={event => setEmail(event.target.value)} type="text" name="email" placeholder="Ingresa tu correo" required></input>
          <input className="form" value={password}
            onChange={event => setPassword(event.target.value)} type="password" name="password" placeholder="Ingresa tu contraseña" required></input>
          <button className="btn-register" onClick={registerButton} type="button">Registrar Usuario</button>
          <Link to="./"> <button className="btn-back" id="btn-back"> Regresar</button></Link>
        </div>
      </div>
    </div>
  )
}

export default TemplateRegister;