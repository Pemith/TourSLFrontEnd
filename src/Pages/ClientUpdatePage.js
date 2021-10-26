import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import '../CSS/MenuUpload.css';
import { useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';

const ClientUpdatePage = () => {

    const clientLocalId=localStorage.getItem("clientId");
    const type=localStorage.getItem('type');
    let url;
    let isRestaurant;
    const {id}=useParams();
    const [clientId]=useState('');
    const [menuItem,setMenuItem]=useState();
    const [mealType,setMealType]=useState();
    const [packageName,setPackageName]=useState();
    const [price,setPrice]=useState();
    const history=useHistory();

    if (type==="Restaurant"){
        isRestaurant=true;
        url='menuupload/';
    }

    else{
        isRestaurant=false;
        url='packageupload/';
    }

    const handleSubmit=(e) =>{
        e.preventDefault();

        try {
        axios.put(("http://localhost:3900/api/"+url+id),{
                clientId:clientLocalId,
                menuItem:menuItem,
                mealType:mealType,
                packageName:packageName,
                price:price
                
            })
            .then((response)=>{
                console.log(response);
                history.push(`/clientdashboard/${clientLocalId}`);
                window.location.reload();
            })
        } catch (error) {
            console.log(error);
        }


    }

    return ( 
        <div className="MenuUpload">
            <Navbar/>
            {isRestaurant && (
                <div className="box">
                <form onSubmit={handleSubmit}>
                    <div className="formstyle">
                        <label>Food Item Name</label>
                        <input 
                            type="text"
                            required
                            value={menuItem}
                            onChange={e =>setMenuItem(e.target.value)}
                        />
                        <label>Meal Type</label>
                        <select 
                            required
                            value={mealType}
                            onChange={e=>setMealType(e.target.value)}
                        >
                            <option value="" selected disabled hidden>Select an option</option>
                            <option value="Appetizer">Appetizer</option>
                            <option value="Beverage">Beverage</option>
                            <option value="Liquor">Liquor</option>
                            <option value="Main Meal">Main Meal</option>

                        </select>
                        <label>Price</label>
                        <input 
                            type="text"
                            required
                            value={price}
                            onChange={e=>setPrice(e.target.value)}
                        />      


                        <button>Save</button>

                    </div>
                </form>
            </div>
            )}

            {!isRestaurant && (
                <div className="box">
                <form onSubmit={handleSubmit}>
                    <div className="formstyle">
                        <label>Package Name</label>
                        <input 
                            type="text"
                            required
                            value={packageName}
                            onChange={e =>setPackageName(e.target.value)}
                        />
                        <label>Price</label>
                        <input 
                            type="text"
                            required
                            value={price}
                            onChange={e=>setPrice(e.target.value)}
                        />                                             
                        <button>Save</button>

                    </div>
                </form>
            </div>
            )}
                
            {/* <Footer/> */}
        </div>
     );
}
 
export default ClientUpdatePage;