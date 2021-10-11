import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import {useState,useEffect} from "react";
import axios from "axios";
import { useHistory,Link } from "react-router-dom";
import '../CSS/Sregistration.css';

const Sregistration = () => {

    const [companyName, setCompanyName]=useState("");
    const [serviceType,setServiceType]=useState("");
    const [address,setAddress]=useState("");
    const [district,setDistrict]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history = useHistory();

    const handleSubmit =(e) =>{
        e.preventDefault();
        // const result={
        //     companyName:companyName,
        //     serviceType:serviceType,
        //     address:address,
        //     district:district,
        //     email:email,
        //     password:password
        // };

        // fetch('http://localhost:3900/api/clienttemp', {
        //     method:'POST',
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(result)
        // })
        axios
        .post("http://localhost:3900/api/clienttemp/", {
            companyName: companyName,
            serviceType: serviceType,
            address: address,
            district: district,
            email: email,
            password: password
        })
        .then(
            (response)=>{
                console.log(response);
            },
            (error) =>{
                console.log(error)
            }
            // history.push('/')

        )
        .catch((err) => {
            console.log(err);
        });
    }

  

//   const choose= (value) =>{
//     history.push('/apreg')
//   }
    return(
        <div className="sreg-img">
            <Navbar/>
                <div className="boxreg">
                    <div className="formstyle">
                    <h1>Registration</h1>
                        <form onSubmit={handleSubmit}>
                            
                            <label>Name of the Organization</label>
                            <input 
                                type="text"
                                required
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                            <label>Type of the Organization</label>
                            <select
                                value={serviceType}
                                onChange={(e) => setServiceType(e.target.value)}
                            >
                                <option value="Activity Provider">Activity Provider</option>
                                <option value="Restaurant">Restaurant</option>
                            </select>
                            <label>Address</label>
                            <input 
                                type="text"
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <label>District</label>
                            <input 
                                type="text"
                                required
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            />
                            <label>Email</label>
                            <input 
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Password</label>
                            <input 
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button>Next</button>
                        </form>

                    </div>
                </div>
            <Footer/>
        </div>
    );
}
 
export default Sregistration;