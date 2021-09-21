import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import slImg from '../Images/sriLankaHigh.png';

import '../CSS/Reception.css';

const Reception = () => {
    return (
        
        
        <div className='reception'>
            <Navbar/>             
                <div className="reception-img">
                    <img src={slImg}/>
                </div>         
                <h1>hi</h1>
                <h1>hi</h1>
                <h1>hi</h1>
            <Footer/>
        </div>
        
        
        
     );
}
 
export default Reception;