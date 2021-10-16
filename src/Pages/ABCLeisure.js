import { Component } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CSS/ABCLeisure.css';



const ABCLeisure = () => {

    

    return ( 

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
     );
}
 
export default ABCLeisure;