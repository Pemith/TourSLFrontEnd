import {Link} from 'react-router-dom';
import LogoImg from "../Images/Yaka.png";

import './Footer.css'

function Footer() {
    return(
        <div className="main-footer">
            {/* <div className="main-footer-img">
                 <img src={LogoImg} alt="logo"/>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="column left">
                        <div className="main-footer-img">
                            <img src={LogoImg} alt="logo"/>
                        </div>
                    </div>
                    <div className="column middle">
                        <p>
                             About Us
                             <hr style={{width:"150px"}} />
                             We are Group 16 of Intake 37 who are developing a Tourist Guidance 
                             Web Application <br/> as our second year software development group project.
                        </p>
                    </div>
                    <div className="column right">
                        <p>
                            Contact Us
                            <hr style={{width:"150px"}} />
                            toursl@gmail.com<br/>
                            tel: 011-xxxxxxx
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;