import React from "react";
import { Link } from "react-router-dom";


const CrearCuenta = () => {
    return ( <div className="hold-transition login-page">
<div className="login-box">
  <div className="login-logo">
    <Link to={"#"}><b>Crear Cuenta</b></Link>
  </div>
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Beienvenido ingrese su informacion</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
        <input type="email" 
         className="form-control" 
          placeholder="Nombre" 
          id="Nombre"
          name="Nombre"/>

          <input type="email" 
          className="form-control" 
          placeholder="Correo" 
          id="email"
          name="email"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>

        <div className="input-group mb-3">
          <input type="password" 
          className="form-control" 
          placeholder="Contraseña" 
          id="password"
          name="password"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        
      
      <div className="social-auth-links text-center mb-3">
        <buttomn type="submit" to={"#"} className="btn btn-block btn-primary">
           Ingresar
        </buttomn>
        <Link to={"/crearcuenta"} className="btn btn-block btn-danger">
           Crear cuenta
        </Link>
      </div>
      </form>
    </div>
  </div>
</div>
    </div> );
}
 
export default CrearCuenta ;