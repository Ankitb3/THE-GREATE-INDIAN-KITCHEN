import React from 'react'
import './Signup.css'
import restoimg from '../../Images/restaurant.jpg'

const Signup = () => {
  return (
    <div>
      <h1 className="text-center">
        <span className="S">S</span>ignup <hr/>
      </h1>
      <div className="signup-main">
        <div className="row container">
          <div className="col-md-6 right-side">
            <div>
              <img src={restoimg} alt="resto" height={350} />
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
                  />
                  <label htmlfor="email">
                    <span className="form_span">E</span>mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="email"
                  />

                  <label htmlfor="phone">
                    <span className="form_span">P</span>hone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    placeholder="enter phone"
                  />
                  <label htmlfor="password">
                    <span className="form_span">P</span>assword
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="password"
                  />

                  <button type="button" className="signupbtn btn">
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