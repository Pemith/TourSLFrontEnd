import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import '../CSS/Profile.css';

const Profile = () => {
    return ( 

        <div className='Profile'>
            <Navbar/>
            <div className="profileh3"><h3>Profile</h3></div> 
            <div className="profilepic"></div>
            <label  >Upload new profile photo here : </label>
                         <input type="file" id="myFile" name="filename"/>
                         <br />
                         <br />
            <div className="hrprof"><hr /></div>
            h3

            <Footer/>
        </div>
     );
}
 
export default Profile;