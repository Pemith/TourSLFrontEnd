import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CSS/Resreg.css';


const RestaurantRegistration = () => {
    return ( 
        <div className="rreg">
            <Navbar/>
                <div className="rregbox">
                    <div className="formstyleres">
                        <form>
                            <h1>Restaurant</h1>
                            <label>
                               Legal Documents (PDF)
                            </label>
                            <input type="file" className="custom-file-input"/>
                            <button  style={{marginTop:"10%"}}>Submit</button>
                        </form>
                    </div>
                </div>
            <Footer/>
        </div>
     );
}
 
export default RestaurantRegistration;