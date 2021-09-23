import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

import '../CSS/Sregistration.css';

const ActivityProvider = () => {
    return ( 
        <div className="apreg-img">
            <Navbar/>
            <div className="boxap">
                <div className="formstyle">
                    <h1>Activity Provider Registration</h1>
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
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default ActivityProvider;