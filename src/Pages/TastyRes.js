import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import '../CSS/TastyRes.css';

const TastyRes = () => {
    return ( 

        <div className='TastyRes'>
            <Navbar/>
            <div className="food"></div>
            <div class="dropdown">
                <button class="dropbtn">Locations</button>
                <div class="dropdown-content">
                    <a href="#">Matara</a>
                    <a href="#">Galle</a>
                    <a href="#">Hambanthota</a>
                </div>
            </div>
            <div className="middletext"><h4>Packages</h4></div>
               
            <button class='menu'>Menu 01: Cuisine Type (PDF)s</button>
            <button class='menu'>Menu 02: Cuisine Type (PDF)</button>
            <button class='menu'>Add Menu (PDF) +</button>
            
            <Footer/>
        </div>
     );
}
 
export default TastyRes;