import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useState } from 'react';
import '../CSS/ClientLogin.css';
import axios from 'axios';

const ClientLogin = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:3900/api/clientauth/",{
            email:email,
            password:password
        })
        .then(
            (response)=>{
                console.log(response);
                console.log("Logged In Successfully");
            },
            (error) =>{
                console.log(error);
            }
        )
        .catch((err)=>{
            console.log(err);
        })
    }
    return ( 
        <div className="login-img">
            <Navbar/>
                <div className="boxlog">
                    <div className="formstyle">
                    <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
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
                                onChange={e=>setPassword(e.target.value)}
                            />
                            <button>Login</button>
                        </form>

                    </div>
                </div>
            <Footer/>
        </div>

     );
}
 
export default ClientLogin;