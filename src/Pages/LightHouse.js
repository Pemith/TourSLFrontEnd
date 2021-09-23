import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaUmbrellaBeach, FaSwimmer } from "react-icons/fa";

import '../CSS/LightHouse.css';

const Lighthouse =() => {
    return (

        <div className="lighthouseM">
            <Navbar/>
            <div className="lighthouse"></div>
            <div class="dropdown">
                <button class="dropbtn">Locations</button>
                <div class="dropdown-content">
                    <a href="#">Matara</a>
                    <a href="#">Galle</a>
                    <a href="#">Hambanthota</a>
                </div>
            </div>
                <div className="desc">
                    <h2>Description</h2>
                </div>
            <Footer/>

        </div>

    )
}
export default Lighthouse;