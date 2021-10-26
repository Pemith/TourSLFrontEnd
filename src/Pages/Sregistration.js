import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import {useState,Component} from "react";
import axios from "axios";
import Joi from "joi-browser";
import { useHistory,Link,Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import '../CSS/Sregistration.css';


const Sregistration = () => {
  const [companyName, setCompanyName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [contactNumber,setContactNumber]=useState("");
  const [workingHours,setWorkingHours]=useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();
  



  const handleSubmit = (e) => {
    e.preventDefault();
  
    try {
      
      axios.post("http://localhost:3900/api/client/", {
        companyName: companyName,
        serviceType: serviceType,
        contactNumber:contactNumber,
        workingHours:workingHours,
        address: address,
        district: district,
        email: email,
        password: password
        // method:'POST',
        // headers:{"Content-Type":"application/json"},
        // body:JSON.stringify(result)
      })
      .then(
        (response) => {
          console.log(response);
          window.location="/home";
          // history.push('/legal')
        },
        (error) => {
          console.log(error.response.data);
          let errorMessage=error.response.data;
          toast.error(errorMessage);
        }
      )
      // .then(      
      //   history.push('/legal')
      // )
      .catch((err) => {
        console.log(err);
      });
    } catch (ex) {
      if(ex.response.status === 400){
        return ex.response.status();
      }
    }
    
  };

  

  return (
    <div className="sreg-img">
      <Navbar />
      <div className="boxreg">
        <div className="formstyle">
          <h1>Registration</h1>
          <form onSubmit={handleSubmit}>
            <label>Name of the Organization</label>
            <input
              type="text"
              required
              placeholder="Enter the Name Here"
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
            />
            <label>Type of the Organization</label>
            <select
              value={serviceType}
              onChange={e => setServiceType(e.target.value)}
            >
              <option value="" selected disabled hidden>Select Your Service Type</option>
              <option value="Activity Provider">Activity Provider</option>
              <option value="Restaurant">Restaurant</option>
            </select>
            <label>Contact Number</label>
            <input 
              type="text" 
              required
              placeholder="Enter a Valid Contact Number"
              value={contactNumber}
              onChange={e => setContactNumber(e.target.value)}
            />
            <label>Working Hours</label>
            <input 
              type="text" 
              required
              placeholder="Ex:- (9.00 a.m-10.00 p.m)"
              value={workingHours}
              onChange={e => setWorkingHours(e.target.value)}
            />
            <label>Address</label>
            <input
              type="text"
              required
              placeholder="Enter the Address"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <label>District</label>
            <select
              value={district}
              onChange={e => setDistrict(e.target.value)}
            >
              <option value="" selected disabled hidden>District of the Organization</option>
              <option value="Ampara">Ampara</option>
              <option value="Anuradhapura">Anuradhapura</option>
              <option value="Badulla">Badulla</option>
              <option value="Batticoloa">Batticoloa</option>
              <option value="Colombo">Colombo</option>
              <option value="Galle">Galle</option>
              <option value="Gampaha">Gampaha</option>
              <option value="Hambantota">Habantota</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Kalutara">Kalutara</option>
              <option value="Kandy">Kandy</option>
              <option value="Kegalle">Kegalle</option>
              <option value="Kilinochchi">Kilinochchi</option>
              <option value="Kurunegala">Kurunegala</option>
              <option value="Mannar">Mannar</option>
              <option value="Matale">Matale</option>
              <option value="Matara">Matara</option>
              <option value="Monaragala">Monaragala</option>
              <option value="Mullativu">Mullativu</option>
              <option value="Nuwara Eliya">Nuwara Eliya</option>
              <option value="Polonnaruwa">Polonnaruwa</option>
              <option value="Puttalam">Puttalam</option>
              <option value="Rathnapura">Rathnapura</option>
              <option value="Trincomalee">Trincomalee</option>
              <option value="Vavuniya">Vavuniya</option>
            </select>
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="Enter the Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              required
              placeholder="Enter the Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sregistration;
