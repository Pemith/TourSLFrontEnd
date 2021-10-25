import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useHistory } from 'react-router-dom';

import '../CSS/DistrictName.css';


const DistrictName = () => {

    const sD = "sd";
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

            <div class='para'>
                <p>
                    <br/>Select Activities to see activities that you can engage in the { localStorage.getItem(sD) } district
                </p>
            </div>
            <button class='dblock' value="Activity" onClick={e =>getDestincations(e.target.value)}>
                Activities
            </button>
            <div class='para'>
                <p>
                    <br />Select Sites to see sites that you can visit in the { localStorage.getItem(sD) } district
                </p>
            </div>
            <button class='dblock' value="Sites" onClick={e =>getDestincations(e.target.value)}>
                Sites
            </button>
            <div class='para'>
                <p>
                    <br />Select Restaurants to view the restaurants that you can dine in or take away the { localStorage.getItem(sD) } district
                </p>
            </div>
            <button class='dblock' value="Restaurants" onClick={e =>getDestincations(e.target.value)}>
                Restaurants
            </button>

            
            
            <Footer/>
        </div>
     );
}
 
export default DistrictName;