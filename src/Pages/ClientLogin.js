import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useState } from 'react';
import { Redirect } from 'react-router';
import '../CSS/ClientLogin.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from "react-toastify"

const ClientLogin = () => {

    const tokenKey="token";
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [data]=useState("");

    setJwt(getJwt());

    function setJwt(jwt){
        axios.defaults.headers.common['x-auth-token']=jwt;
    }

    function getJwt(){
        return localStorage.getItem(tokenKey);
    }

    function getCurrentUser(){
        try{
            const jwt=localStorage.getItem(tokenKey);
            return jwtDecode(jwt);
        }

        catch(ex){
            return null;
        }
    }

    const  handleSubmit = async(e) =>{
        e.preventDefault();

        try {
            const {data:jwt}=await axios.post("http://localhost:3900/api/clientauth/",{
                email:email,
                password:password
            })       
            .then(
                (response)=>{
                    console.log(response);
                    localStorage.setItem(tokenKey,jwt);
                    console.log("Logged In Successfully");
                },
                (error) =>{
                    console.log(error);
                    let errorMessage=error.response.data;
                    toast.error(errorMessage);
                }
            )
            .catch((err)=>{
                console.log(err);
            })
        } catch (ex) {
            console.log(ex.response);
        }
        
    }

    if(getCurrentUser()){
        return <Redirect to="/"/>;
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

