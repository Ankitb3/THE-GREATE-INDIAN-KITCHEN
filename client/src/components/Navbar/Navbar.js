import React,{useState} from 'react'
import { myFoodItemCount } from '../../util/Mylist';
import "./Navbar.css"
import logoimg from "../../Images/logo.png"
import { Link } from 'react-router-dom';
const Navbar = ({ user }) => {

    const [foodItemCount, setFoodItemCount] = useState(myFoodItemCount);

  return (
    <div className="my_nav">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logoimg} alt="logo" height={50} className="ms-5" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  className="fs-4 ms-3 text-decoration-none "
                >
                  Home
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <h4 className="me-5 mt-1 text-dark">hello {user}</h4>
              <Link to="/mylist" className='text-decoration-none'>
                <h6 className="mt-1 text-light fs-4 text-center">
                  My List<span>{foodItemCount}</span>
                </h6>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar