import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../CSS/ClientLogin.css';

const ClientLogin = () => {
    return ( 
        <div className="login-img">
            <Navbar/>
                <div className="boxreg">
                    <div className="formstyle">
                    <h1>Login</h1>
                        <form>
                            <label>Email</label>
                            <input 
                                type="email"
                                required
                            />
                            <label>Password</label>
                            <input 
                                type="password"
                                required
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