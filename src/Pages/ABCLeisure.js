import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import '../CSS/ABCLeisure.css';

const ABCLeisure = () => {
    return ( 

        <div className='reception'>
            <div className="abcgirls"></div>
            <Navbar/>

            <div className="ABC"></div>
            <div class="dropdown">
                <button class="dropbtn">Locations</button>
                <div class="dropdown-content">
                    <a href="#">Matara</a>
                    <a href="#">Galle</a>
                    <a href="#">Hambanthota</a>
                </div>
            </div>
            <div className="middletext"><h4>Packages</h4></div>
               
            <button class='menu'>Package 01 : Surfing</button>
            <button class='menu'>Package 02 : Snorkeling</button>
            <button class='menu'>Add Package +</button>

               
            <Footer/>
        </div>
     );
}
 
export default ABCLeisure;