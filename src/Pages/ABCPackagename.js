import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import '../CSS/ABCPackagename.css';

const ABCPackagename = () => {
    return(
        <div className="ABCPackagename">
            <Navbar/>
                <div className="box">
                    <div className="formstyle">
                        <label>Package Name</label>
                        <input 
                            type="text"
                            required
                         />
                         <label>Price (LKR)</label>
                         <input 
                            type="text"
                            required
                        />
                         <label  >Description</label>
                         <input 
                            type="text"
                            required className='desc1'
                        />
                      

                        <button>Next</button>

                    </div>
                </div>
            <Footer/>
        </div>
    );
}
 
export default ABCPackagename;