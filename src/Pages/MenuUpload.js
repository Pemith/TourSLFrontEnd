import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import '../CSS/MenuUpload.css';

const MenuUpload = () => {
    return(
        <div className="MenuUpload">
            <Navbar/>
                <div className="box">
                    <div className="formstyle">
                        <label>Menu Name</label>
                        <input 
                            type="text"
                            required
                         />
                         <label>Cusine Type</label>
                         <input 
                            type="text"
                            required
                        />
                         <label  >Upload Menu here</label>
                         <input type="file" id="myFile" name="filename"/>
                         
                      

                        <button>Save</button>

                    </div>
                </div>
            <Footer/>
        </div>
    );
}
 
export default MenuUpload;