import React from "react";
import { Link } from "react-router-dom";
const CrearCuenta = () => {
    return ( 
        <div class="hold-transition login-page">
        <div className="login-box">
            <div className="login-logo">
                <Link to={"#"}><b>Crear Cuenta </b>Serviplus</Link>
            </div>

            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Bienvenido  ingrece su credenciales</p>
                    <form action="../../index3.html" method="post">
                    <div className="input-group mb-3">
                            <input type="text" 
                            className="form-control" 
                            placeholder="Ingresa Tu nombre completo" 
                            id="nombreusuario"
                            name="nombreusuario"/>
                          
                        </div>
                       
                       
                        <div className="input-group mb-3">
                            <input type="email"
                             className="form-control" 
                             placeholder="Correo Electronico" 
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
    
                        <button type="submit"  to={"#"} className="btn btn-block btn-primary">
                             Crear Cuenta 
                        </button>
                      
                    </div>
                
                    </form>
                </div>
               
            </div>
        </div>







    </div>);
    
}
 
export default CrearCuenta ;