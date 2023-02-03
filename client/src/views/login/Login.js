import React, { useState,useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./Login.css";
import restoimg from "../../Images/restaurant.jpg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   useEffect(() => {
     const currentuser = JSON.parse(localStorage.getItem("currentuser"));
    if(currentuser){
      
      window.location.href = "/"
    }
   }, []);

  async function loginuser() {
    const response = await axios.post("/login", {
      email: email,
      password: password
    });
    console.log(response.data);
    if (response.data.success) {
     await swal("Login successfully!", response.data.message, "success");
      localStorage.setItem("currentuser",JSON.stringify (response.data.data));
      window.location.href = "/"
    } else {
      await swal("Try agin!", response.data.message, "error");
      localStorage.removeItem("currentuser");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div>
      <h1 className="text-center">
        <span className="S">L</span>ogin <hr />
      </h1>
      
     
      <div className="login-main">
        <div className="row container">
          <div className="col-md-6 right-side">
            <div>
              <img src={restoimg} alt="resto" />
            </div>
          </div>
          <div className="col-md-6 left-side-login m-5">
            <div className="form_container">
              <form>
                <div className="form-group">
                 
                  <label htmlfor="email">
                    <span className="form_span">E</span>mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  
                  <label htmlfor="password">
                    <span className="form_span">P</span>assword
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    className="loginbtn btn"
                    onClick={loginuser}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
        
      </div>
      
    </div>
    
  );
};

export default Login;
