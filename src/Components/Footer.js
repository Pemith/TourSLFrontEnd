import {Link} from 'react-router-dom';
import LogoImg from "../Images/Yaka.png";

import './Footer.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-img">
                    <img src={LogoImg} alt="logo"/>
            </div>
            <div className="footer_container">
                <div className="row">
                    <div className="column">
                        <p>
                            About Us
                            <hr style={{width:"150px"}} />
                            The Description Related to the tour SL Web Site Comes here
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            Contact Us
                            <hr style={{width:"150px"}}/>
                            Email: toursl@xxx.com<br/>
                            tel: 011-xxxxxxx
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Footer;