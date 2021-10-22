import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaUmbrellaBeach, FaSwimmer } from "react-icons/fa";

import '../CSS/SiteDetails.css';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';



const RestaurantDetails =() => {

    const {id}=useParams();
    const [menu,setMenu]=useState(null);
    var resMenu=null;

    useEffect(() =>{
        fetch('http://localhost:3900/api/menuupload',{
            
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then(async response =>{

                try{
                    const data=await response.json();
                    console.log('response data?',data);
                    return data;
                }catch(error){
                    console.log('An Error Occured');
                    console.error(error);
                }
                
            })
            .then(data => {
                setMenu(data);
                console.log(data);
            })
            .catch((err)=>{
                console.log(err.message);
            })

    },[]);

    console.log(menu);

    try{
        resMenu=menu.filter(menus=>menus.client._id===id);
        console.log(resMenu);
    }

    catch(e){
        console.log(e.message);
    }
    
    return (

        console.log(resMenu),
        <div className="site-details">
            {console.log(menu)}
            <Navbar/>
            <article>
                {resMenu && resMenu.map(menus =>{
                    return <div key={menus._id}>
                        <h2>{menus.menuItem}</h2>
                        <p>Portion Price LKR {menus.price}</p>

                    </div>
                })}
            </article>

            <Footer/>

        </div>

    )
}
export default RestaurantDetails;
