import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useState } from 'react';
import { Redirect,useHistory } from 'react-router-dom';
import '../CSS/ClientLogin.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from "react-toastify";


const ClientLogin = () => {

    let type="type";
    const tokenKey="token";
    const clientLocalId="clientId";
    const isLoggedIn="isLoggedIn";
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [data]=useState("");
    const history=useHistory();

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


    const  handleSubmit = (e) =>{
        e.preventDefault();

        try {
            axios.post("http://localhost:3900/api/clientauth/",{
                email:email,
                password:password
            })
            .then(
                (response)=>{
                    console.log(response);
                    // console.log(response.headers);
                    let response1 = response.headers;
                    let response2 = Object.values(response1);
                    let response3 = response2[2];

                    let data1=response.data;
                    let data2=Object.values(data1);
                    let data3=data2[2];
                    
                    let clientId=data2[0];
                    console.log(response3);
                    console.log(data3);
                    console.log(clientId);
                    localStorage.setItem(tokenKey,response3);
                    localStorage.setItem(isLoggedIn,true);
                    localStorage.setItem(type,data3);
                    localStorage.setItem(clientLocalId,clientId);
                    // history.push('/abcleisure');
                    window.location.reload();
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

    const clientId=localStorage.getItem(clientLocalId);
    if(getCurrentUser()){     
        return <Redirect to={`/clientdashboard/${clientId}`} />
    }
    return (
        <div className="loginBackground">
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

     
};

export default ClientLogin;


