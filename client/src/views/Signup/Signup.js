import React,{useState,useEffect} from 'react'
import axios from "axios"
import swal from 'sweetalert'
import './Signup.css'
import restoimg from '../../Images/restaurant.jpg'
const Signup = () => {

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("user")



  useEffect(() => {
    const currentuser = JSON.parse(localStorage.getItem("currentuser"));
    if (currentuser) {
      window.location.href = "/";
    }
  }, []);


  async function signupUser(){
    const response = await axios.post("/signup",{
      name: name,
      email: email,
      phone: phone,
      password: password,
      role: role
    })
    console.log(response.data)
    if(response.data.success){
      await swal("Signup successfully!", response.data.message, "success");
      window.location.href = "/login";
    }
    else{
       swal("Try agin!", response.data.message, "error");
      setName('');
      setPhone('');
      setEmail('')
      setPassword('')
     
    }

  }

  return (
    <div className='main'>
      <h1 className="text-center">
        <span className="S">S</span>ignup <hr />
      </h1>
      <div>
        
      </div>
      <div className="signup-main">
        <div className="row container">
          <div className="col-md-6 right-side">
            <div>
              <img src={restoimg} alt="resto" />
            </div>
          </div>
          <div className="col-md-6 left-side m-5">
            <div className="form_container">
              <form>
                <div className="form-group">
                  <label htmlfor="name">
                    <span className="form_span">F</span>ull name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
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

                  <label htmlfor="phone">
                    <span className="form_span">P</span>hone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    placeholder="enter phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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

                  <button type="button" className="signupbtn btn" onClick={signupUser}>
                    Signup
                    
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup