import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaUmbrellaBeach, FaSwimmer } from "react-icons/fa";

import '../CSS/Leisure.css';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import RestaurantDetailsList from './RestaurantDetailsList';


const Leisure =() => {

    var dataRes;
    const {id}=useParams();
    const [restaurant,setRestaurant]=useState(null);
    console.log(id);

    useEffect(() =>{
        fetch('http://localhost:3900/api/menuupload')
            .then(res =>{
                console.log(res);
                return res.json();
            })
            .then(data => {
                
                console.log(data);
                // let data1=data[1];
                // console.log(data1);
                setRestaurant(data);
            })
    },[]);
    
    return (

        <div className="Leisure">
            <Navbar/>
            <div className="pic"></div>
            <div class="dropdown">
                <button class="dropbtn">Locations</button>            
            </div>
            
            {restaurant && <RestaurantDetailsList
                restaurant={restaurant.filter(
                    resmenu =>resmenu.client.id===id
                   
                )}
            />}

            {/* <Footer/> */}

        </div>

    )
}
export default Leisure;
