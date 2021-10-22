import '../CSS/Home.css'
import logoImg from '../Images/Yaka.png';
import {Link} from 'react-router-dom';


const Home = () => {

    
    return (
         
        <div className="home">
            <div className="boxhome">
                <div className="boxhome-img">
                    <Link to='/'>
                        <img src={logoImg} alt="logo" />
                    </Link>                  
                </div>
                <h1>Tour SL</h1>
            </div>

            <div className="centerfirst">
                <Link to='/reception'>
                    <button>Traveler</button>
                </Link>

                <Link to= '/registerlogin'>
                    <button>Shop Owner</button>
                </Link>

            </div>
        </div>
        
     );
}
 
export default Home;