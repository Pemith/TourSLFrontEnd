import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CSS/Apregistration.css';
const ActivityProvider = () => {
    return ( 
        <div className="apreg">
            <Navbar/>
                <div className="apbox">
                    <div className="formstyleap">
                    <h1>Activity Provider Registration</h1>
                        <form>                                                       
                            <label>Types of Activities</label>
                            <input 
                                type="text"
                                required
                            />
                            <label>Legal Documents</label>
                            <input 
                                type="text"
                                required
                            />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            <Footer/>
        </div>
     );
}
 
export default ActivityProvider;