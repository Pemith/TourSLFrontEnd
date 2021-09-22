import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


import '../CSS/DistrictName.css';


const DistrictName = () => {
    return ( 


        <div className='DistrictName'>
            
            <Navbar/>
        
            <button class='block'>Activities</button>
            <button class='block'>Sites</button>
            <button class='block'>Restaurants</button>
            
            
            <Footer/>
        </div>
     );
}
 
export default DistrictName;