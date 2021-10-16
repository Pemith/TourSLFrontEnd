import { Link,NavLink } from "react-router-dom";
import "./Navbar.css";
import LogoImg from "../Images/Yaka.png";
import login from '../Pages/ClientLogin';
import React from "react";

const Navbar = () => {

  let user;
  if(login.getCurrentUser()){
    user=true;
    return user;
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-img">
          <img src={LogoImg} alt="Invalid"/>
        </div>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <h2> Tour SL</h2>
          </Link>
        </div>
        {/* {user && (
          <React.Fragment>
            <NavLink to='/login'>
              <button>LogOut</button>
            </NavLink>
          </React.Fragment>
          
        )} */}

      </nav>
    </>
  );
};

export default Navbar;
