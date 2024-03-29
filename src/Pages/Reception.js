import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import slImg from '../Images/sriLankaHigh.png';
import backgroundVideo from '../Images/Video4.mp4';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../CSS/Reception.css';
import Activities from './Activities';

const Reception = () => {

    const [selectedDistrict, setSelectedDistrict]=useState("");
    const sD="sd";
    const history=useHistory();

    const handleSubmit =(e) =>{
        localStorage.setItem(sD,selectedDistrict);
        history.push("/districtname");

    }
    return (
        
        <>
        <div className='reception'>
                <Navbar />
                <video autoPlay loop muted id='video'>
                    <source src={backgroundVideo} type='video/mp4'/>
                </video>
                <div className="reception-img">
                    <img src={slImg} style={{
                        "-webkit-filter":"drop-ShadowRoot(5px 5px 5px #222 )",
                        filter:"drop-shadow(5px 5px 5px #222)"
                    }} />
                </div>
                <div className='reception-p'>
                    <p>
                        Sri Lanka is an island country located off the southern coast of India. Sri Lanka is surrounded by the Indian Ocean, Gulf of Mannar, the Palk Strait, and lies in the vicinity of India and the Maldives. The geography of Sri Lanka includes coastal plains in the north and hills and mountains in the interior.
                    </p>
                </div>
                <h1>Choose Your Preferred District</h1>
                <div className="choose">
                    <form onSubmit={ handleSubmit }>
                        <select
                            value={selectedDistrict}
                            onChange={e => setSelectedDistrict(e.target.value)}
                        >
                            <option value="" selected disabled hidden>Select Your District</option>
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
                            <option value="Matara">Matara</option>
                            <option value="Monaragala">Monaragala</option>
                            <option value="Mullativu">Mullativu</option>
                            <option value="Nuwara Eliya">Nuwara Eliya</option>
                            <option value="Polonnaruwa">Polonnaruwa</option>
                            <option value="Puttalam">Puttalam</option>
                            <option value="Rathnapura">Rathnapura</option>
                            <option value="Trincomalee">Trincomalee</option>
                            <option value="Vavuniya">Vavuniya</option>
                        </select>
                        <div className="alignButton">
                            {selectedDistrict && <button id="buttonGo">Lets Go!</button>}
                        </div>         
                    </form>
                </div>
                {/* <Footer /> */}
            </div></>
        
        
        
     );
}
 
export default Reception;