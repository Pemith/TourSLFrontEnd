import LogoImg from "../Images/Yaka.png";
import '../CSS/WelcomeSection.css';
import {Link} from 'react-router-dom';

const Welcome = () => {

    
    return ( 
        <div className="welcome">
            <Link to='/home'>
                <div className="boxw">
                    <div className="boxw-img">
                        <img src={LogoImg} alt="Invalid"/>
                    </div>           
                    <h1>Tour SL</h1>      
                </div>
            </Link>           
        </div>
    );
}
 
export default Welcome;