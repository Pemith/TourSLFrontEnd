import { Component } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CSS/ABCLeisure.css';
import '../CSS/TastyRes.css';


const ClientDashboard = () => {

    const type=localStorage.getItem('type');
    console.log(type);
    let isRestaurant;
    if (type==="Restaurant"){
        isRestaurant=true;
    }


    return ( 
        <>

        {isRestaurant && (
            <div className='TastyRes'>
            <Navbar/>
            <div className="food"></div>
            <button class="dropbtn">Location</button>
            {/* <div className="middletext"><h4>Packages</h4></div> */}            
            <button class='menu'>Menu 01: Cuisine Type (PDF)s</button>
            <button class='menu'>Menu 02: Cuisine Type (PDF)</button>
            <button class='menu'>Add Menu (PDF) +</button>
            
            <Footer/>
        </div>
        )}


        {!isRestaurant && (
            <div className='reception'>
            <div className="abcgirls"></div>
            <Navbar/>

            <div className="ABC"></div>
            <button class="dropbtn">Location</button>
            
            <button class='menu'>Package 01 : Surfing</button>
            <button class='menu'>Package 02 : Snorkeling</button>
            <button class='menu'>Add Package +</button>

            
            <Footer/>
        </div>
        )}    
            
        </>    
        
     );
}
 
export default ClientDashboard;