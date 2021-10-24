import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';

import '../CSS/DeletePage.css';
const DeletePage = () => {

    const type=localStorage.getItem('type');
    let url;
    let isRestaurant;
    const {id}=useParams();
    const history=useHistory();

    if (type==="Restaurant"){
        isRestaurant=true;
        url='menuupload/';
    }

    else{
        isRestaurant=false;
        url='packageupload/';
    }

    return ( 
        
        <div className="deletePage">
            <Navbar/>
            <div className="boxDelete">
                {/* <div className="centerIcon">
                                      
                </div> */}
                
                
                <h1>Sure You Want to Delete?</h1>
                
                    
                <div className="centerButton">
                    <button>Yes</button>
                    <button>No</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default DeletePage;