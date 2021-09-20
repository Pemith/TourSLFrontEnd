import '../CSS/Home.css'
import logoImg from '../Images/Yaka.png';

const Home = () => {
    return (
         
        <div className="home">
            <div className="box">
                <div className="box-img">
                    <img src={logoImg} />
                </div>
                <p>
                    Tour SL
                </p>
            </div>

            {/* <div className="button">
                <button style={{left:'20px'}}>Hi</button>
            </div> */}
            
            <div className="button">
            <ul>
                <li>
                    <button>
                        Traveler
                    </button>
                </li>
                <li>
                    <button>
                        Shop Owner
                    </button>
                </li>
            </ul>
            </div>
        </div>
        
     );
}
 
export default Home;