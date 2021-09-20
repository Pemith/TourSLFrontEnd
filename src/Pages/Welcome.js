import '../CSS/WelcomeSection.css';
import LogoImg from "../Images/Yaka.png";


const Welcome = () => {

    
    return ( 
        <div className="welcome">
            <div className="box">
                <div className="box-img">
                    <img src={LogoImg} alt="Invalid"/>
                </div>               
                <p>
                    Tour SL                     
                </p>    
            </div>
        </div>
     );
}
 
export default Welcome;