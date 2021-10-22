import { Link,NavLink } from "react-router-dom";
import "./Navbar.css";
import LogoImg from "../Images/Yaka.png";
import login from '../Pages/ClientLogin';
import React from "react";

const Navbar = () => {

  const tokenKey="token";
  const isLoggedIn="isLoggedIn";
  let type="type";

  const user=localStorage.getItem('isLoggedIn');
  function logOut(){
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(isLoggedIn);
    localStorage.removeItem(type);

    // window.location="/home";
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-img">
          <Link to="/home">
            <img src={LogoImg} alt="Logo"/>
          </Link>
        </div>
      
          
        <h2>Tour SL</h2>


        {user && (
          <React.Fragment>
              <NavLink to='/home'>            
                <ul>
                  <li>
                    <button onClick={logOut}>Log Out</button>
                  </li>
                </ul>
              </NavLink>
            
          </React.Fragment>
        )}
      
        

      </nav>
    </>
  );
};

export default Navbar;
