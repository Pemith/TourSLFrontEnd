import LogoImg from "../Images/Yaka.png";
import '../CSS/WelcomeSection.css';

const Welcome = () => {

    
    return ( 
        <div className="welcome">
            <div className="boxw">
                <div className="boxw-img">
                    <img src={LogoImg} alt="Invalid"/>
                </div>           
                <h1>Tour SL</h1>      
            </div>
        </div>
     );
}
 
export default Welcome;