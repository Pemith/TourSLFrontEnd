import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CSS/Sregistration.css';
const ActivityProvider = () => {
    return ( 
        <div className="apreg">
            <Navbar/>
                <div className="apbox">
                    <div className="formstyle">
                    <p>Activity Provider Registration</p>
                        <form>                                                       
                            <label>Types of Activities</label>
                            <input 
                                type="text" 
                                required
                            />
                            <label>Legal Documents</label>
                            <input type="file" id="myFile" name="filename"/>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            <Footer/>
        </div>
     );
}
 
export default ActivityProvider;