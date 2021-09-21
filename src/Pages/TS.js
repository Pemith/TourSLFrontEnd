import '../CSS/TS.css';
import LogoImg from "../Images/Yaka.png";

const TS = () => {
    return (

        <div className="ts">
            <div className="box">
                <div className="box-img">
                    <img src={LogoImg} alt="Invalid"/>
                </div>              
                    <p>
                        Tour SL                    
                    </p>                       
            </div>

            <ul className="button">
                <li>
                    <button>
                        <b>Traveler</b>
                    </button>
                </li>
                <li>
                    <button>
                        <b>Shop Owner</b>
                    </button>
                </li>
            </ul>
            
        </div>
     );
}

export default TS;