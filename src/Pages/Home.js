import '../CSS/Home.css'
import logoImg from '../Images/Yaka.png';

const Home = () => {
    return (
         
        <div className="home">
            <div className="boxhome">
                <div className="boxhome-img">
                    <img src={logoImg} alt="Invalid"/>
                </div> 

                <h1>Tour SL</h1> 
            </div>

            <div className="center">
                <button>Traveler</button>
                <button>Shop Owner</button>
            </div>
            
        </div>
        
     );
}
 
export default Home;