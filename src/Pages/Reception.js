import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import slImg from '../Images/sriLankaHigh.png';

import '../CSS/Reception.css';

const Reception = () => {
    return (
        
        
        <div className='reception'>
            <Navbar/>             
                <div className="reception-img">
                    <img src={slImg}/>
                </div>     
                <div className='reception-p'>
                    <p>
                    Sri Lanka is an island country located off the southern coast of India. Sri Lanka is surrounded by the Indian Ocean, Gulf of Mannar, the Palk Strait, and lies in the vicinity of India and the Maldives. The geography of Sri Lanka includes coastal plains in the north and hills and mountains in the interior.
                    </p>
                </div>    
                <h1>Choose your District</h1>
                <div className="choose">                    
                    <form >
                        <select>
                            <option value="Ampara">Ampara</option>
                            <option value="Anuradhapura">Anuradhapura</option>
                            <option value="Badulla">Badulla</option>
                            <option value="Batticoloa">Batticoloa</option>
                            <option value="Colombo">Colombo</option>
                            <option value="Galle">Galle</option>
                            <option value="Gampaha">Gampaha</option>
                            <option value="Hambantota">Habantota</option>
                            <option value="Jaffna">Jaffna</option>
                            <option value="Kalutara">Kalutara</option>
                            <option value="Kandy">Kandy</option>
                            <option value="Kegalle">Kegalle</option>
                            <option value="Kilinochchi">Kilinochchi</option>
                            <option value="Kurunegala">Kurunegala</option>
                            <option value="Mannar">Mannar</option>
                            <option value="Matale">Matale</option>
                            <option value="Monaragala">Monaragala</option>
                            <option value="Mullativu">Mullativu</option>
                            <option value="Nuwara_Eliya">Nuwara Eliya</option>
                            <option value="Polonnaruwa">Polonnaruwa</option>
                            <option value="Puttalam">Puttalam</option>
                            <option value="Rathnapura">Rathnapura</option>
                            <option value="Trincomalee">Trincomalee</option>
                            <option value="Vavuniya">Vavuniya</option>
                        </select>
                    </form>
                </div>
               
            <Footer/>
        </div>
        
        
        
     );
}
 
export default Reception;