import { useParams,Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// import '../CSS/ABCLeisure.css';
import '../CSS/TastyRes.css';


const ClientDashboard = () => {

    const {id}=useParams();
    const type=localStorage.getItem('type');
    let url;
    var clientMenus=null;
    var clientPackages=null;
    console.log(type);
    let isRestaurant;
    const [details,setDetails]=useState(null);

    if (type==="Restaurant"){
        isRestaurant=true;
        url='menuupload';

        try{
            clientMenus=details.filter(packs=>packs.client._id===id);
            console.log(clientMenus);
        }catch(e){
            console.log(e.message);
        }
    }

    else{
        isRestaurant=false;
        url='packageupload';

        try{
            clientPackages=details.filter(rest=>rest.client._id===id);
            console.log(clientPackages);
        }catch(e){
            console.log(e.message);
        }
    }

    
        useEffect(()=>{
            fetch('http://localhost:3900/api/'+url,{
                method:'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(async response =>{
                try{
                    const data=await response.json();
                    console.log('response data?',data);
                    return data;
                }
                catch(error){
                    console.log('Error Occured');
                    console.error(error);
                }
            })
            .then(data =>{
                setDetails(data);
                console.log(data);
            })
            .catch((err)=>{
                console.log(err.message);
            })
        },[]);
    


    return ( 
        <>
            <div className="food">
                <Navbar />
                
                <button className="locButton">Location</button>
                
                {isRestaurant && clientMenus && clientMenus.map(menu =>{
                return <div key={menu._id}>
                    <button className='displayBtn'>{menu.mealType}: {menu.menuItem}<br/>LKR: {menu.price}/=</button>
                    </div>}
                )}
                {!isRestaurant && clientPackages && clientPackages.map(pack =>{ 
                    return <div key={pack._id}>
                    {/* <div className="ABC"></div> */}                
                    <button className='displayBtn'>{pack.packageName}<br/>
                        LKR: {pack.price}/=
                    </button>
                    </div>}   
                )}
                <Link to={`/menuupload/${id}`}>
                    <button className="addButton">Add+</button>
                </Link>
                
                
                <Footer />
            </div>
            
        </>    
        
     );
}
 
export default ClientDashboard;