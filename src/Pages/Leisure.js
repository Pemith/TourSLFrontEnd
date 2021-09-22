import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaUmbrellaBeach, FaSwimmer } from "react-icons/fa";

import '../CSS/Leisure.css';


const Leisure =() => {
    return (

        <div className="Leisure">
            <Navbar/>
            <div className="pic"></div>
            <div class="dropdown">
                <button class="dropbtn">Locations</button>
                <div class="dropdown-content">
                    <a href="#">Matara</a>
                    <a href="#">Galle</a>
                    <a href="#">Hambanthota</a>
                </div>
                </div>
            <button class='block'> <FaUmbrellaBeach /> Surfing <p>half an hour surfing all the eqipments will be provided.     500/- per head</p>  </button>
            <button class='block'><FaSwimmer/>Snorkeling <p>All the equipments are included. A guide will be provided.    500/- per head</p></button>

            <Footer/>

        </div>

    )
}
export default Leisure;
