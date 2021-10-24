import '../CSS/RegisterLogin.css'
import logoImg from '../Images/Yaka.png';
import {Link,Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const RegisterLogin = () => {

    const tokenKey="token";
    const clientLocalId="clientId";

    function getCurrentUser(){
        try{
            const jwt=localStorage.getItem(tokenKey);
            return jwtDecode(jwt);
        }
    
        catch(ex){
            return null;
        }
    }

    const clientId=localStorage.getItem(clientLocalId);
    if(getCurrentUser()){     
        return <Redirect to={`/clientdashboard/${clientId}`} />
    }
    return ( 

        <div className="rlcontainer">
            <div className="boxreglog">                         
                    <div className="boxreglog-img">
                        <Link to='/home'>
                            <img src={logoImg} />
                        </Link>                      
                    </div>
                <div className="center">


                    <Link to='/sreg'>
                        <button>Register</button>
                    </Link>
                    <Link to='/login'>
                        <button>Log In</button>
                    </Link>                   
                </div>                                       
            </div>
        </div>
     );
}
 
export default RegisterLogin;