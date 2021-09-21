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

            <button className="button">Traveler</button>
            <button className='button'>Shop Owner</button>
        </div>
        
     );
}
 
export default Home;