import '../CSS/RegisterLogin.css'
import logoImg from '../Images/Yaka.png';
import {Link} from 'react-router-dom';

const RegisterLogin = () => {
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