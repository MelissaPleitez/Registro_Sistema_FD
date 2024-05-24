import React, { useEffect, useState, useContext} from "react";
import LoginField from "./LoginField";
import Footer from "./Footer";
import LoginImg from "./LoginImg";
import ErrorMessage from "./ErrorMessage";
import { handleLoginRequest } from "../../api/ApiMethods";
import { useNavigate } from "react-router-dom";
import { useAuth  } from "../../context/AuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState(null);
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

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await handleLoginRequest(email, password)
        if(response){
            localStorage.setItem("token", response.status.token);
            login()
            navigate("/Dashboard")
        }
    } catch (errors) {
        setErrors("Credenciales inválidas. Inténtalo de nuevo");
    }
  };



  return (
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
         <LoginImg imgUrl={"https://img.freepik.com/vector-gratis/ilustracion-concepto-inicio-sesion-tableta_114360-7893.jpg?t=st=1716400613~exp=1716404213~hmac=8ebcd610550efbc0e6e73376bc378dd71c34e5416f612048ddd7d3a470dd2fe8&w=740"}/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form  onSubmit={handleLoginSubmit}>
            <div className="divider d-flex align-items-center my-4">
              <h2 className="text-center fw-bold mx-3 mb-0">
                Iniciar sesión
              </h2>
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
              <a href="#!" className="text-body">
                Forgot password?
              </a>
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
                Iniciar sesión
              </button>
            </div>
            <ErrorMessage error={error}/> 
          </form>
        </div>
      </div>
    </div>
  <Footer/>
  </section>
       
                   
  );
}

export default LoginForm;
