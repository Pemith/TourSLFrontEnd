import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CSS/ABCLeisure.css';
import '../CSS/TastyRes.css';


const ClientDashboard = () => {

    const {id}=useParams();
    const type=localStorage.getItem('type');
    console.log(type);
    let isRestaurant;
    const [details,setDetails]=useState(null);

    if (type==="Restaurant"){
        isRestaurant=true;
        // directFunction('menuupload');
    }

    else{
        isRestaurant=false;
        // directFunction('packageupload');
    }

    // function directFunction(url){
    //     const result=useEffect(()=>{
    //         fetch('http://localhost:3900/api/'+url,{
    //             method:'GET',
    //             headers:{
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         .then(async response =>{
    //             try{
    //                 const data=await response.json();
    //                 console.log('response data?',data);
    //                 return data;
    //             }
    //             catch(error){
    //                 console.log('Error Occured');
    //                 console.error(error);
    //             }
    //         })
    //         .then(data =>{
    //             setDetails(data);
    //             console.log(data);
    //         })
    //         .catch((err)=>{
    //             console.log(err.message);
    //         })
    //     },[]);

    //     return result;
    // }
    

    console.log()


    return ( 
        <>

        {isRestaurant && (
            <div className='TastyRes'>
            <Navbar/>
            <div className="food"></div>
            <button class="dropbtn">Location</button>
            {/* <div className="middletext"><h4>Packages</h4></div> */}            
            <button class='menu'>Add Menu (PDF) +</button>
            
            <Footer/>
        </div>
        )}


        {!isRestaurant && (
            <div className='TastyRes'>
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