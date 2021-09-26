import '../CSS/RegisterLogin.css'
import logoImg from '../Images/Yaka.png';

const RegisterLogin = () => {
    return ( 

        <div className="rlcontainer">
            <div className="boxreglog">                         
                    <div className="boxreglog-img">
                        <img src={logoImg} />
                    </div>
                <div className="center">
                    <button>Register</button><br/>
                    <button>Log In</button>
                </div>                                       
            </div>
        </div>
     );
}
 
export default RegisterLogin;