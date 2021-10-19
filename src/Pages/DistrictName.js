import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useHistory } from 'react-router-dom';

import '../CSS/DistrictName.css';


const DistrictName = () => {
    const destinationType="destinationType";
    const history = useHistory();
    function getDestincations(value){
        localStorage.setItem(destinationType,value);

        if(value==='Activity'){
            history.push("/activities");
        }

        if(value==='Restaurants'){
            history.push("/restaurants");
        }

        if(value==='Sites'){
            history.push("/sites");
        }
        
    }
    return ( 


        <div className='DistrictName'>
            
            <Navbar/>
        
            <button class='block' value="Activity" onClick={e =>getDestincations(e.target.value)}>Activities</button>
            <button class='block' value="Sites" onClick={e =>getDestincations(e.target.value)}>Sites</button>
            <button class='block' value="Restaurants" onClick={e =>getDestincations(e.target.value)}>Restaurants</button>
            
            
            <Footer/>
        </div>
     );
}
 
export default DistrictName;