import React, { useEffect, useState } from "react";
import LoginField from "./LoginField";
import Footer from "./Footer";
import LoginImg from "./LoginImg";
import { Link } from "react-router-dom";
import { handleRegistrationRequest } from "../../api/ApiMethods";
import { useNavigate } from "react-router-dom";
import { useAuth  } from "../../context/AuthContext";

function SigUpForm(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    
    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
      };
    
      const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
      };

    
      const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
      };
    

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await handleRegistrationRequest(email, password)
            console.log("esto trae 1:", response.data.token)
            if(response){
                localStorage.setItem("token", response.data.token);
                login()
                navigate("/Dashboard");
            }
        } catch (errors) {
            console.log(errors)
        }
    };

    return ( 
        <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
         <LoginImg imgUrl={"https://img.freepik.com/vector-gratis/ilustracion-concepto-marcador-posicion_114360-4847.jpg?t=st=1716400494~exp=1716404094~hmac=f11f0d169117b511dba7bb49a125a33fec693cc49947d0959938b03d53006446&w=740"}/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={handleRegistrationSubmit}>
            <div className="divider d-flex align-items-center my-4">
              <h2 className="text-center fw-bold mx-3 mb-0">
              Registrarte
              </h2>
            </div>

            <div>
            <LoginField
               type={"text"}
               icon={"User"}
               placeholder={"Introduzca su nombre de usuario"}
               onChange={handleUsername}
              />
              <label className="form-label">Nombre de usuario</label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4 my-4">
              <LoginField
               type={"email"}
               icon={"User"}
               placeholder={"Introduzca su correo"}
               onChange={handleEmail}
              />
              <label className="form-label">Correo</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-3">
              <LoginField
               type={"password"}
               icon={"User"}
               placeholder={"Introduzca su contraseña"}
               onChange={handlePassword}
              />
              <label className="form-label">Contraseña</label>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label className="form-check-label">Remember me</label>
              </div>
              <p href="#!" className="text-body">
              <Link 
                className="form-check-label"
                 style={{
                  paddingLeft: "2.5rem",
                  paddingRight: "2.5rem",
                  color: "#5AE4A8",
                  listStyle: "none"
                }} 
              to="/">Inicia Sesion</Link>
              </p>
            </div>

            <div className="text-center text-lg-start mb-3 mt-4 pt-2">
              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-lg"
                style={{
                  paddingLeft: "2.5rem",
                  paddingRight: "2.5rem",
                  backgroundColor: "#5AE4A8",
                  color: "white",
                }}
              >
                Registrarte
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  <Footer/>
  </section>
    )
}

export default SigUpForm