import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoImg from "../Images/Yaka.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-img">
          <img src={LogoImg} alt="Invalid"/>
        </div>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <h2> Tour SL</h2>
            <i class="fab fa-typo3" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
