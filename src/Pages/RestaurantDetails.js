import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaUmbrellaBeach, FaSwimmer } from "react-icons/fa";

import '../CSS/RestaurantDetails.css';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';



const RestaurantDetails =() => {

    const {id}=useParams();
    const [menu,setMenu]=useState(null);
    const [clients, setClients] = useState(null);
    var selectedClient = null;
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

    },[])

    useEffect(() => {
        fetch('http://localhost:3900/api/client',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(async response => {
          try {
           const data = await response.json()
           console.log('response data?', data)
           return data;
         } catch(error) {
           console.log('Error happened here!')
           console.error(error)
         }})
        .then(data => {
          setClients(data);
          console.log(data)
        })
        .catch((err) => {
          console.log(err.message);
        })
      }, [])
    

    console.log(menu);
    console.log(clients);

    try{
        resMenu=menu.filter(menus=>menus.client._id===id);
        console.log(resMenu);
    }
    catch(e){
        console.log(e.message);
    }
    
    try{
        selectedClient = clients.filter(client => client._id === id);
        console.log(selectedClient);
      }catch(e){
        console.log(e.message);
      }

    return (
        console.log(selectedClient),
        console.log(resMenu),
        <div className="restaurant-details">
          <Navbar/>
          <article>
            <div className="r1block">
              {selectedClient && selectedClient.map(client => {
                return <div>
                  <h1>{client.companyName}<br /></h1><h2>{client.address}<br /></h2>
                  <h3>Contact Number: { client.contactNumber }<br /><br /></h3>
                </div> 
              }

              )}
              {resMenu && resMenu.map(menus =>{
                    return <div key={menus._id}>
                        <h4>{menus.menuItem}</h4>
                        <h5>Meal Type: {menus.mealType}</h5>
                        <p>Portion Price LKR {menus.price}/=<br/><br/></p>
                    </div>
                })}
            </div>
                
            </article>
        </div>

    )
}
export default RestaurantDetails;
