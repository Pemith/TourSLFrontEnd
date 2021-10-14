import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import {useState,Component} from "react";
import axios from "axios";
import Joi from "joi-browser";
import { useHistory,Link } from "react-router-dom";
import { toast } from 'react-toastify';
import '../CSS/Sregistration.css';


const Sregistration = () => {
  const [companyName, setCompanyName] = useState("");
  const [serviceType, setServiceType] = useState("Activity Provider");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // const errors = this.validate();
    // this.setState({ errors: errors || {} });
    // if (errors) return;
    // const result = {
    //   companyName,
    //   serviceType,
    //   address,
    //   district,
    //   email,
    //   password,
    // };
    try {
      
      axios.post("http://localhost:3900/api/client/", {
        companyName: companyName,
        serviceType: serviceType,
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
          history.push('/legal')
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
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
            />
            <label>Type of the Organization</label>
            <select
              value={serviceType}
              onChange={e => setServiceType(e.target.value)}
            >
              <option value="Activity Provider">Activity Provider</option>
              <option value="Restaurant">Restaurant</option>
            </select>
            <label>Address</label>
            <input
              type="text"
              required
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <label>District</label>
            <input
              type="text"
              required
              value={district}
              onChange={e => setDistrict(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button>Next</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sregistration;
