import { Link,NavLink } from "react-router-dom";
import "./Navbar.css";
import LogoImg from "../Images/Yaka.png";
import login from '../Pages/ClientLogin';
import React from "react";

const Navbar = () => {

  const tokenKey="token";
  const isLoggedIn="isLoggedIn";

  const user=localStorage.getItem('isLoggedIn');
  function logOut(){
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(isLoggedIn);
    window.location="/";
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

          {user && (
          <React.Fragment>
            <NavLink to='/'>
              <button onClick={logOut}> Log Out</button>
            </NavLink>
          </React.Fragment>      
          )}
        </div>
        

      </nav>
    </>
  );
};

export default Navbar;
