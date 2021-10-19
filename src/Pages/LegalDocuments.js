import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useState } from 'react';
import axios from 'axios';
import '../CSS/Resreg.css';


const RestaurantRegistration = () => {

    const handleSubmit =(e) =>{
        e.preventDefault();

        axios.post("http://localhost:3900/api/clientLegaldocuments/",{

        })
    }    

    return ( 
        <div className="rreg">
            <Navbar/>
                <div className="rregbox">
                    <div className="formstyleres">
                        <form>
                            <h1>Legal Documents</h1>
                            <label>
                               Upload Here (PDF)
                            </label>
                            <input type="file" className="custom-file-input"/>
                            <button  style={{marginTop:"10%"}}>Submit</button>
                        </form>
                    </div>
                </div>
            <Footer/>
        </div>
     );
}
 
export default RestaurantRegistration;