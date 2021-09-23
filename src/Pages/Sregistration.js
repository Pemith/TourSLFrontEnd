import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import '../CSS/Sregistration.css';

const Sregistration = () => {
    return(
        <div className="sreg-img">
            <Navbar/>
                <div className="box">
                    <div className="formstyle">
                        <h1>Registration</h1>
                        <label>Name of the Organization</label>
                        <input 
                            type="text"
                            required
                         />
                         <label>Type of the Organization</label>
                         <select>
                             <option value="Activity Provider">Activity Provider</option>
                             <option value="Restaurant">Restaurant</option>
                         </select>
                         <label>Address</label>
                         <input 
                            type="text"
                            required
                        />
                        <label>District</label>
                        <input 
                            type="text"
                            required
                        />
                        <label>Email</label>
                        <input 
                            type="email"
                            required
                        />
                        <label>Password</label>
                        <input 
                            type="password"
                            required
                        />

                        <button>Next</button>

                    </div>
                </div>
            <Footer/>
        </div>
    );
}
 
export default Sregistration;